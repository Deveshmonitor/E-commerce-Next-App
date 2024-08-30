import { UserIcon } from "@/constant/icons";
import { images } from "@/constant/images";
import { webisteData } from "@/constant/website";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center px-5 border-b ">
      <div className="flex flex-row justify-between items-center space-x-8">
        <div className="flex flex-row justify-between items-center ">
          <img
            src={images.logo}
            alt="logo"
            className="w-16 h-16 object-contain"
          />
          <p className="font-bold text-xl text-primary">{webisteData?.name}</p>
        </div>

        <div>
          <a
            href=""
            className="text-gray-800 font-semibold text-sm hover:text-primary"
          >
            Categories
          </a>
        </div>
      </div>

      <div className=" flex flex-row justify-between items-center w-8/12 space-x-4 px-4 py-2.5 rounded-full">
        <MagnifyingGlassIcon className="size-4" />
        <input
          type="text"
          placeholder="Search for products, brands and more"
          className="outline-none text-sm flex-1"
        />
      </div>

      <ul className="flex flex-row space-x-4">
        {webisteData?.menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 hover:text-primary"
          >
            <a
              href={item.url}
              className="text-gray-800 font-semibold text-sm hover:text-primary "
            >
              {item.label}
            </a>
            {item.icons}
          </div>
        ))}
      </ul>
    </div>
  );
}
