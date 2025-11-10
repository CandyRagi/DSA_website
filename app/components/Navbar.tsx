"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[var(--background)] border-b border-gray-300 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/img/Logo.png" alt="DSAMage Logo" width={50} height={50} />
            <span className="text-[var(--foreground)] text-2xl font-bold">DSAMage</span>
          </Link>
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/how" className="text-[var(--foreground)] hover:text-gray-500 transition-colors duration-300">
              How it works
            </Link>
            <Link href="/about" className="text-[var(--foreground)] hover:text-gray-500 transition-colors duration-300">
              About
            </Link>
            <Link href="/contact" className="text-[var(--foreground)] hover:text-gray-500 transition-colors duration-300">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--foreground)] hover:text-gray-500 focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-[var(--background)] bg-opacity-95 z-50 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-[var(--foreground)] hover:text-gray-500 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Link
            href="/how"
            className="text-[var(--foreground)] hover:text-gray-500 text-2xl"
            onClick={() => setIsOpen(false)}
          >
            How it works
          </Link>
          <Link
            href="/about"
            className="text-[var(--foreground)] hover:text-gray-500 text-2xl"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-[var(--foreground)] hover:text-gray-500 text-2xl"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
