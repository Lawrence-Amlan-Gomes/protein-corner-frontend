"use client";
import { CartContext } from "../contexts";
import { useContext } from "react";

export const useCart = () => {
  const { isCart, setIsCart, cartProducts, setCartProducts } =
    useContext(CartContext);
  const addToCart = (p) => {
    if (cartProducts.length == 0) {
      let tepmArr = [];
      tepmArr.push({ ...p, quantity: 1 });
      setCartProducts(tepmArr);
    } else {
      let value = true;
      let tepmArr = [];
      for (let i of cartProducts) {
        if (p.id == i.id) {
          tepmArr.push({ ...i, quantity: i.quantity + 1 });
          value = false;
        } else {
          tepmArr.push({ ...i });
        }
      }
      if (value) {
        tepmArr.push({ ...p, quantity: 1 });
      }
      setCartProducts(tepmArr);
    }
  };
  const deleteFromCart = (p) => {
    let tepmArr = [];
    for (let i of cartProducts) {
      if (i.id != p.id) {
        tepmArr.push(i);
      }else {
        if(i.quantity > 1){
          tepmArr.push({...i, quantity: i.quantity-1})
        }
      }
    }
    setCartProducts(tepmArr);
  };

  return {
    isCart,
    setIsCart,
    cartProducts,
    setCartProducts,
    addToCart,
    deleteFromCart,
  };
};
