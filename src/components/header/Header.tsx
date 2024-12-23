"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Navigation } from "../navigation/Navigation";
import { LanguageSelector } from "../languageSelector/LanguageSelector";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // @typescript-eslint/no-unused-vars
  // const [isMobile, setIsMobile] = useState(false);

  // Состояние для выбранного языка
  const [language, setLanguage] = useState<'en' | 'ru' | 'kg'>('en');

  const handleLanguageChange = (newLanguage: 'en' | 'ru' | 'kg') => {
    setLanguage(newLanguage);
  };

  // Обработчик прокрутки
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => setIsScrolled(window.scrollY > 50));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Проверка ширины экрана
  // useEffect(() => {
  //   const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);

  //   checkIsMobile(); // Первоначальная проверка
  //   window.addEventListener("resize", checkIsMobile);

  //   return () => window.removeEventListener("resize", checkIsMobile);
  // }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-700 ease-in-out ${isScrolled ? "bg-white shadow-lg" : "bg-black"
        }`}
    >
      <div className="container max-w-[1110px] mx-auto flex items-center justify-between py-4 px-6">
        {/* Логотип */}
        <div className="text-2xl font-bold">
          <Link href="/" aria-label="Go to homepage">
            <span
              className={`transition-colors duration-700 ease-in-out ${isScrolled ? "text-black" : "text-white"
                }`}
            >
              Shumkar
            </span>
          </Link>
        </div>

        {/* Иконка бургер-меню */}
        <button
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          className="lg:hidden z-50 relative focus:outline-none"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? (
            null
            // <X className="w-8 h-8 text-white" />
          ) : (
            <Menu className={`w-8 h-8 ${isScrolled ? "text-black" : "text-white"}`} />
          )}
        </button>

        {/* Навигация для десктопа */}
        <div className="hidden lg:flex items-center gap-[25px]">
          <Navigation
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            isScrolled={isScrolled}
          />
          <LanguageSelector
            currentLanguage={language}
            onChangeLanguage={handleLanguageChange}
          />
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center z-40 py-8 px-6">
          <div className="w-full flex justify-between items-center z-50">
            {/* Логотип внутри меню */}
            <Link href="/" aria-label="Go to homepage">
              <span className="text-2xl font-bold text-black">Shumkar</span>
            </Link>
            {/* Кнопка закрытия меню */}
            <button
              aria-label="Close navigation menu"
              onClick={() => setIsMenuOpen(false)}
              className="focus:outline-none"
            >
              <X className="w-8 h-8 text-black" />
            </button>
          </div>

          {/* Контейнер навигации */}
          <div className="flex flex-col items-center mt-8 gap-6 w-full">
            {/* Навигация */}
            <div className="w-full text-center">
              <Navigation
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                isScrolled={false}
              />
            </div>

            {/* Смена языка */}
            <div className="w-full text-center z-50 mt-[250px]">
              <LanguageSelector
                currentLanguage={language}
                onChangeLanguage={handleLanguageChange}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
