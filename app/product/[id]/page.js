'use client'
import Product from "@/components/Product";

export default function ProductDetailsPage({params}) {
  return (
      <Product params={params}/>
  );
}
