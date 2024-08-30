import { PhoneIcon } from "@/constant/icons";
import React from "react";

export default function TopBar() {
  return (
    <div className="bg-primary  flex-row justify-between p-3 md:flex hidden">
      <div className="flex flex-row  items-center space-x-2">
        <PhoneIcon className="text-white size-3" />
        <p className="text-white text-xs ">+91 8517014691</p>
      </div>
      <div className="flex flex-row  items-center space-x-4">
        <p className="text-white text-xs">Get 50 % off on selected Items </p>
        <p className="text-white text-xs">|</p>
        <a href="" className="text-white text-xs underline">
          Shop Now
        </a>
      </div>

      <p className="text-white text-xs">Help & Support</p>
    </div>
  );
}
