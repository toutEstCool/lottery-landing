'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface INavigationProps {
  isMenuOpen?: boolean;
  setIsMenuOpen: (state: boolean) => void;
  isScrolled: boolean;
}

export const Navigation = (props: INavigationProps) => {
  const { isMenuOpen, setIsMenuOpen, isScrolled } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Состояние для дропдауна
  const dropdownRef = useRef<HTMLDivElement>(null); // Ссылка на контейнер дропдауна

  const navLinkClasses = (scrolled: boolean) =>
    `text-lg transition-colors duration-300 ease-in-out hover:text-purple-500 ${scrolled ? "text-black" : "lg:text-white text-black"
    }`;

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Закрытие дропдауна при клике вне его области или нажатии Esc
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <nav
      className={`mt-[100px] md:mt-0 lg:flex lg:space-x-6 lg:items-center ${isMenuOpen
        ? "fixed top-0 left-0 h-full w-full bg-white z-40 flex flex-col space-y-6 pt-20 px-6"
        : "hidden lg:flex"
        }`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Product Services с дропдауном */}
      <div className="relative flex justify-center" ref={dropdownRef}>
        <button
          onClick={toggleDropdown} // Открытие/закрытие по клику
          className={`flex items-center ${navLinkClasses(isScrolled)}`}
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        >
          Product Services
        </button>
        <div
          className={`absolute flex justify-center items-center w-full top-full left-0 mt-2 md:w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-[150] transform transition-all duration-300 ease-in-out ${isDropdownOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
            }`}
          role="menu"
        >
          <ul>
            <li>
              <Link
                href="/product1"
                className="block px-4 py-2 text-black hover:bg-gray-100 rounded-lg"
                onClick={() => {
                  closeDropdown();
                  setIsMenuOpen(false);
                }}
              >
                Оператор Лотерей
              </Link>
            </li>
            <li>
              <Link
                href="/product2"
                className="block px-4 py-2 text-black hover:bg-gray-100 rounded-lg"
                onClick={() => {
                  closeDropdown();
                  setIsMenuOpen(false);
                }}
              >
                Защищенные Документы
              </Link>
            </li>
            <li>
              <Link
                href="/product3"
                className="block px-4 py-2 text-black hover:bg-gray-100 rounded-lg"
                onClick={() => {
                  closeDropdown();
                  setIsMenuOpen(false);
                }}
              >
                Персонализация
              </Link>
            </li>
            <li>
              <Link
                href="/product4"
                className="block px-4 py-2 text-black hover:bg-gray-100 rounded-lg"
                onClick={() => {
                  closeDropdown();
                  setIsMenuOpen(false);
                }}
              >
                RFID Контроль
              </Link>
            </li>
            <li>
              <Link
                href="/product5"
                className="block px-4 py-2 text-black hover:bg-gray-100 rounded-lg"
                onClick={() => {
                  closeDropdown();
                  setIsMenuOpen(false);
                }}
              >
                Умный Город
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* About us */}
      <Link
        href="#features"
        className={navLinkClasses(isScrolled)}
        onClick={() => setIsMenuOpen(false)}
      >
        About us
      </Link>

      {/* Contacts */}
      <Link
        href="#shop"
        className={navLinkClasses(isScrolled)}
        onClick={() => setIsMenuOpen(false)}
      >
        Contacts
      </Link>
    </nav>
  );
};
