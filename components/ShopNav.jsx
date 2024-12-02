"use client"
import { useCategory } from "@/app/hooks/useCategory";
import CategoryItem from "./CategoryItem";

export default function ShopNav(){
    const { category, setCategory, categoryArr } = useCategory();
    return (
        <div className="sticky top-[-1%] z-20 pt-[10px] lg:pt-[15px] pb-[10px] bg-white items-center border-t-[1px] border-b-[1px] border-[#cccccc] w-full grid lg:grid-cols-6 grid-cols-3 text-center lg:px-10 text-[11px] lg:text-[18px]">
          {categoryArr.map((i) => (
            <CategoryItem
              key={i}
              name={i}
              setCategory={setCategory}
              category={category}
            />
          ))}
        </div>
    );
}