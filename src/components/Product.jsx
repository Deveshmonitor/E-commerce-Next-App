import React from "react";
import ProductCard from "./common/ProductCard";

export default function Product({ data, title }) {
  console.log(data);
  return (
    <div className="px-10 my-10">
      <p className="text-2xl font-bold">{title}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6  my-5 gap-6 ">
        {data?.map((value) => {
          return <ProductCard data={value} />;
        })}
      </div>
    </div>
  );
}
