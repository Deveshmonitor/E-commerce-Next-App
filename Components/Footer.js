'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <Link href="/" className="hover:underline mx-2">Home</Link>
          <Link href="/about" className="hover:underline mx-2">About</Link>
          <Link href="/services" className="hover:underline mx-2">Services</Link>
          <Link href="/contact" className="hover:underline mx-2">Contact</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
