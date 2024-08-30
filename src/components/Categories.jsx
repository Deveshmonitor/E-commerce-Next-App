import React from "react";
import CategoryCard from "./common/CategoryCard";

function Categories({ data }) {
  return (
    <div className="px-10 my-10">
      <p className="text-2xl font-bold">Shop Our Top Categories</p>

      <div className=" my-5">
        {data?.data?.map((value) => {
          return <CategoryCard data={value} />;
        })}
      </div>
    </div>
  );
}

export default Categories;
