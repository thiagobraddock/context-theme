import React, { useContext, useEffect, useState } from 'react';
import OrderContext, { CartState, Product } from './OrderContext';

const initialState = {
  products: [],
  total: 0,
};

function OrderProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartState>(initialState);

  useEffect(() => {
    const total = cart.products
      .reduce((acc, prod) => acc + (prod.price * prod.quantity), 0);

    setCart((prevState) => ({
      ...prevState,
      total,
    }));
  }, [cart.products]);

  const addProduct = (product: Omit<Product, 'quantity'>) => {
    const productInCart = cart.products.find((p) => p.id === product.id);
    if (productInCart) {
      setCart({
        ...cart,
        products: cart.products.map((p) => (p.id === product.id
          ? { ...p, quantity: p.quantity + 1 } : p)),
      });
    } else {
      setCart({
        ...cart,
        products: [...cart.products, { ...product, quantity: 1 }],
      });
    }
  };

  const removeProduct = (id: number) => {
    const updatedProducts = cart.products.map((prod) => {
      if (prod.id === id) {
        return prod.quantity > 1
          ? { ...prod, quantity: prod.quantity - 1 }
          : null;
      }
      return prod;
    }).filter(Boolean) as Product[];

    setCart({
      ...cart,
      products: updatedProducts,
    });
  };

  const checkout = () => {
    alert('Pedido enviado com sucesso');
    setCart(initialState);
  };

  return (
    <OrderContext.Provider value={ { addProduct, cart, removeProduct, checkout } }>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderProvider;

// --- custom Hook, colocar em uma arquivo separado
export function useOrder() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('Order Context não pode ser usado fora de um provider');
  }
  return context;
}
