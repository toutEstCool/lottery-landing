"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Функция для проверки прокрутки страницы
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-700 ease-in-out ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="container max-w-[1110px] mx-auto flex items-center justify-between py-4 px-6">
        {/* Логотип */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <span
              className={`transition-colors duration-700 ease-in-out ${isScrolled ? "text-black" : "text-white"
                }`}
            >
              Voltamic
            </span>
          </Link>
        </div>

        {/* Навигация */}
        <nav className="space-x-6">
          <Link
            href="/"
            className={`transition-colors duration-700 ease-in-out ${isScrolled ? "text-black hover:text-gray-500" : "text-white hover:text-gray-300"
              }`}
          >
            Home
          </Link>
          <Link
            href="#features"
            className={`transition-colors duration-700 ease-in-out ${isScrolled ? "text-black hover:text-gray-500" : "text-white hover:text-gray-300"
              }`}
          >
            Features
          </Link>
          <Link
            href="#shop"
            className={`transition-colors duration-700 ease-in-out ${isScrolled ? "text-black hover:text-gray-500" : "text-white hover:text-gray-300"
              }`}
          >
            Shop Product
          </Link>
          <Link
            href="#contact"
            className={`transition-colors duration-700 ease-in-out ${isScrolled ? "text-black hover:text-gray-500" : "text-white hover:text-gray-300"
              }`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};
