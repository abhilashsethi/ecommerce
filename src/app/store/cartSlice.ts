import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

// Load cart from localStorage
const loadCartFromLocalStorage = (): CartState => {
  if (typeof window !== 'undefined') {
    try {
      const serializedCart = localStorage.getItem('cart');
      if (serializedCart) {
        const parsedCart = JSON.parse(serializedCart);
        return {
          items: parsedCart.items || [],
          total: parsedCart.total || 0
        };
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
    }
  }
  return { items: [], total: 0 };
};

// Save cart to localStorage
const saveCartToLocalStorage = (cart: CartState) => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }
};


const initialState: CartState = loadCartFromLocalStorage();

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item?.price * item?.quantity, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find((item) => item?.id === action.payload?.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.total = calculateTotal(state.items);
      saveCartToLocalStorage(state);
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item?.id !== action.payload);
      state.total = calculateTotal(state.items);
      saveCartToLocalStorage(state);
    },

    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity = action.payload.quantity;
        if (item.quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== action.payload.id);
        }
      }

      state.total = calculateTotal(state.items);
      saveCartToLocalStorage(state);
    },

    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      saveCartToLocalStorage(state);
    },

    // Optional: Action to manually load cart from localStorage
    loadCart: (state) => {
      const loadedCart = loadCartFromLocalStorage();
      state.items = loadedCart.items;
      state.total = loadedCart.total;
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, loadCart } = cartSlice.actions;
export default cartSlice.reducer;