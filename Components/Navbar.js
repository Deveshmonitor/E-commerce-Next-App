'use client';

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          <Link href="/">&lt; E-Commerce /&gt;</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-700 dark:text-gray-200 hover:underline">Home</Link>
          <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:underline">About</Link>
          <Link href="/services" className="text-gray-700 dark:text-gray-200 hover:underline">Services</Link>
          <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:underline">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800">
          <Link href="/" className="block text-gray-700 dark:text-gray-200 p-2">Home</Link>
          <Link href="/about" className="block text-gray-700 dark:text-gray-200 p-2">About</Link>
          <Link href="/services" className="block text-gray-700 dark:text-gray-200 p-2">Services</Link>
          <Link href="/contact" className="block text-gray-700 dark:text-gray-200 p-2">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
