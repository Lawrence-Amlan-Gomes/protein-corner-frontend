"use client";

import { useState } from "react";

import { CategoryContext } from "../contexts";

export default function CategoryProvider({ children }) {
  const [category, setCategory] = useState("All");
  const [categoryArr, setCategoryArr] = useState([]);
  return (
    <CategoryContext.Provider
      value={{ category, setCategory, categoryArr, setCategoryArr }}
    >
      {children}
    </CategoryContext.Provider>
  );
}
