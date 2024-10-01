import { SetStateAction, createContext } from 'react';

export type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export type CartState = {
  products: Product[];
  total: number;
};

type OrderContextType = {
  cart: CartState;
  addProduct: (product: Omit<Product, 'quantity'>) => void;
  removeProduct: (id: number) => void;
  checkout: () => void;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export default OrderContext;
