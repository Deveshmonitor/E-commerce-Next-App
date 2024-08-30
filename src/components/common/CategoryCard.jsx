import React from "react";

function CategoryCard({ data }) {
  return (
    <div className="w-20 flex justify-center items-center flex-col ">
      <img
        src={data.image}
        className="w-20 h-20 rounded-full border object-contain"
      />
      <h3 className="mt-2 text-base font-semibold text-black ">{data.name}</h3>
    </div>
  );
}

export default CategoryCard;
