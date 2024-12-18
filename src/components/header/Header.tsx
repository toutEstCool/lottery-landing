"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        {/* Иконка бургер-меню */}
        <div className="lg:hidden z-50 relative">
          {isMenuOpen ? (
            <X
              className={`w-8 h-8 cursor-pointer text-black`}
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <Menu
              className={`w-8 h-8 cursor-pointer ${isScrolled ? "text-black" : "text-white"
                }`}
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>

        {/* Навигация */}
        <nav
          className={`lg:flex lg:space-x-6 lg:items-center ${isMenuOpen
              ? "fixed top-0 left-0 h-full w-full bg-white z-40 flex flex-col space-y-6 pt-20 px-6"
              : "hidden lg:flex"
            }`}
        >
          <Link
            href="/"
            className={`text-lg transition-colors duration-300 ease-in-out hover:text-purple-500 ${isScrolled ? "text-black" : "lg:text-white text-black"
              }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#features"
            className={`text-lg transition-colors duration-300 ease-in-out hover:text-purple-500 ${isScrolled ? "text-black" : "lg:text-white text-black"
              }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="#shop"
            className={`text-lg transition-colors duration-300 ease-in-out hover:text-purple-500 ${isScrolled ? "text-black" : "lg:text-white text-black"
              }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Shop Product
          </Link>
          <Link
            href="#review"
            className={`text-lg transition-colors duration-300 ease-in-out hover:text-purple-500 ${isScrolled ? "text-black" : "lg:text-white text-black"
              }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Review
          </Link>
        </nav>
      </div>
    </header>
  );
};
