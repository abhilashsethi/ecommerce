import { Product } from '../store/cartSlice';

export const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://via.placeholder.com/300x200/3B82F6/ffffff?text=Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 299.99,
    image: 'https://via.placeholder.com/300x200/10B981/ffffff?text=Smart+Watch',
    description: 'Feature-rich smartwatch with health tracking',
  },
  {
    id: 3,
    name: 'Laptop Stand',
    price: 49.99,
    image: 'https://via.placeholder.com/300x200/F59E0B/ffffff?text=Laptop+Stand',
    description: 'Adjustable aluminum laptop stand for better ergonomics',
  },
  {
    id: 4,
    name: 'Wireless Mouse',
    price: 29.99,
    image: 'https://via.placeholder.com/300x200/EF4444/ffffff?text=Mouse',
    description: 'Ergonomic wireless mouse with precision tracking',
  },
  {
    id: 5,
    name: 'USB-C Hub',
    price: 79.99,
    image: 'https://via.placeholder.com/300x200/8B5CF6/ffffff?text=USB+Hub',
    description: 'Multi-port USB-C hub with HDMI and fast charging',
  },
  {
    id: 6,
    name: 'Bluetooth Speaker',
    price: 69.99,
    image: 'https://via.placeholder.com/300x200/06B6D4/ffffff?text=Speaker',
    description: 'Portable Bluetooth speaker with premium sound quality',
  },
];