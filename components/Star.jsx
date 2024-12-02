"use client"
import StarLogo from "../public/star.svg"
import Image from "next/image";
export default function Star({num}) {
    const starArr = []
    for (let i = 0; i < num; i++) {
        starArr.push(<Image width={20} height={20} src={StarLogo} alt="S" className="float-left"/>)
        
      };
  return <div>{starArr}</div>
  
}