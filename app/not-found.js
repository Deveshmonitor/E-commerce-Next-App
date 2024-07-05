'use client';

import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">404</h1>
        <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Oops! Page not found.
        </p>
        <Link to={"/"} className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300">
         
            Go Back Home
        
        </Link>
      </div>
    </div>
  );
}
