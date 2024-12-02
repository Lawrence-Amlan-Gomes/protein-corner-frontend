"use client"
import colors from "@/app/utils/colors";
import { useEffect, useState } from "react";

export default function CategoryItem({ name, setCategory, category }) {
  const [active, setActive] = useState(false)
  useEffect(()=>{
    if(name == category){
      setActive(true)
    }else{
      setActive(false)
    }
  },[category, name])
  return (
    <div onClick={()=>setCategory(name)} className={`h-[30px] cursor-pointer lg:text-[18px] text-[16px] overflow-hidden float-left ${active ? colors.keyColorText : colors.textBody1} hover:font-bold ${colors.keyColorTextHover} flex justify-center items-center`}>
      {name}
    </div>
  );
}
