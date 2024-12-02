"use client";
import { CategoryContext } from "../contexts";
import { createContext, useContext, useEffect } from "react";
import products from "../utils/products";

export const useCategory = () => {
  const { category, setCategory, categoryArr, setCategoryArr } = useContext(CategoryContext);
  useEffect(() => {
    let dumArr = ["All"];
    for (let i of products) {
      if (!dumArr.includes(i.category)) {
        dumArr.push(i.category);
      }
    }
    setCategoryArr(dumArr);
  }, [setCategoryArr]);

  return { category, setCategory, categoryArr, setCategoryArr };
};
