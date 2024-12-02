"use client";

import { useState } from "react";

import { CartContext } from "../contexts";

export default function CartProvider({ children }) {
  const [ isCart, setIsCart] = useState(false);
  const [cartProducts, setCartProducts] = useState([])

  return (
    <CartContext.Provider value={{  isCart, setIsCart, cartProducts, setCartProducts }}>
      {children}
    </CartContext.Provider>
  );
}
