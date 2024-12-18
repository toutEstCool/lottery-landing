"use client";

import { faFacebookF, faInstagram, faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#a2a2a4] py-12">
      {/* Контейнер */}
      <div className="container mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-6">
        {/* Логотип */}
        <h2 className="text-2xl font-bold text-white">Shumkar Company</h2>

        {/* Текст */}
        <p className="max-w-3xl text-sm sm:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
        </p>

        {/* Иконки социальных сетей */}
        <div className="flex items-center justify-center gap-4">
          <a href="#" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-900 hover:bg-gray-300 transition-colors duration-300">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" aria-label="Telegram" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-900 hover:bg-gray-300 transition-colors duration-300">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="#" aria-label="Whatsapp" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-900 hover:bg-gray-300 transition-colors duration-300">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="#" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-900 hover:bg-gray-300 transition-colors duration-300">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        {/* Навигационные ссылки */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors duration-300">FAQ</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Support Info</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a>
        </nav>

        {/* Текст с авторским правом */}
        <p className="text-sm text-gray-500">
          Lottery © 2024 - Designed by Danil Panarin.
        </p>
      </div>
    </footer>
  );
};
