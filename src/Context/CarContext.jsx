import React, { createContext, useState,useEffect } from 'react';

export let CartContext = createContext();

export function CartProvider({ children }) {
  let [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    let storedCartItems = JSON.parse(localStorage.getItem('cartItems')) ;
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  
  let addToCart = (product) => {
    let existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  let removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  let total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, total, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}