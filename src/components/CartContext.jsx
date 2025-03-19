/* eslint-disable no-unused-vars */
import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const contextValue = useMemo(() => ({ cart, addToCart }), [cart]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// 🔹 Validation des props
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;
