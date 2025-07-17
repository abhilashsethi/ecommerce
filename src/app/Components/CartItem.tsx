'use client';

import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, CartItem as CartItemType } from '../store/cartSlice';
import Image from 'next/image';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleQuantityChange = (newQuantity: number) => {
    dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
      <div className="relative h-16 w-16 flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          // fill
          className="object-cover rounded"
        />
      </div>

      <div className="flex-grow">
        <h4 className="font-semibold text-gray-800">{item.name}</h4>
        <p className="text-gray-600 text-sm">${item.price}</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
        >
          -
        </button>
        <span className="w-8 text-center font-semibold">{item.quantity}</span>
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
        >
          +
        </button>
      </div>

      <div className="text-right">
        <p className="font-semibold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
        <button
          onClick={handleRemove}
          className="text-red-500 hover:text-red-700 text-sm"
        >
          Remove
        </button>
      </div>
    </div>
  );
}