// pages/index.js
import React from "react";

import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


const res = await fetch("http://127.0.0.1:8888/products/all?limit=12&offset=0");
if (!res.ok) {
  throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
}
const product = await res.json();

const Home = () => {
  return (
    <div className="container w-10/12 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Fake Api Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 my-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.data.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-lg flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="mb-2 text-gray-700">Price: ${product.price}</p>
              <p className="mb-4 text-gray-600">{product.description}</p>
            </div>
            <button className="bg-slate-500 text-white py-2 px-4 rounded-lg hover:bg-slate-600 transition duration-200">
              <Link href={"/"}>Add To Card</Link>
            </button>
          </div>
        ))}
      
       
            
        
        
      </div>
      <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
    </div>
  );
};

export default Home;
