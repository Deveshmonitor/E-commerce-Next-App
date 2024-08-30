import { webisteData } from "@/constant/website";
import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

function ProductCard({ data }) {
  console.log(data);

  //   const rating = data?.variants[0]?.rating;
  return (
    <div className="border rounded-md ">
      <img src={data?.image} alt="" className="bg-slate-800 border-b" />
      <div className="p-2 relative">
        <p className="text-lg font-semibold">{data?.title}</p>
        <p className="absolute top-2 right-4 text-primary font-bold">
          {webisteData?.currency}
          {data?.variants[0]?.price}
        </p>

        <p className="text-sm font-normal">
          {data?.description?.slice(0, 70)}...
        </p>

        <div className="flex items-center  mt-2">
          {Array.from({ length: data?.rating_rate }).map((_, index) => (
            <StarIcon key={index} className="text-primary size-4" />
          ))}
        </div>

        <div>
          <button className="border-primary border hover:bg-primary-dark text-black font-medium text-sm py-1 px-4 rounded-full mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
