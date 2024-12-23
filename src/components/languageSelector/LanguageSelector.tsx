'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';

type Language = 'en' | 'ru' | 'kg';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onChangeLanguage: (language: Language) => void;
}

export const LanguageSelector = ({
  currentLanguage,
  onChangeLanguage,
}: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Русский' },
    { code: 'kg', label: 'Киргизский' },
  ];

  const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeDropdown = useCallback(() => setIsOpen(false), []);

  const selectLanguage = useCallback(
    (code: Language) => {
      onChangeLanguage(code);
      closeDropdown();
    },
    [onChangeLanguage, closeDropdown]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeDropdown();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeDropdown]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeDropdown]);

  return (
    <nav className="relative inline-block mt-[120px] md:mt-[0]" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="w-[30px] h-[30px] bg-gray-200 text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg font-medium"
      >
        {currentLanguage.toUpperCase()}
      </button>

      {/* Выпадающий список с анимацией */}
      <ul
        role="menu"
        className={`absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-xl shadow-lg z-10 transform transition-all duration-300 ease-in-out ${isOpen
          ? 'opacity-100 scale-100 pointer-events-auto'
          : 'opacity-0 scale-95 pointer-events-none'
          }`}
      >
        {languages.map(({ code, label }) => (
          <li key={code} role="none">
            <button
              role="menuitem"
              aria-checked={currentLanguage === code} // Заменяем aria-selected
              onClick={() => selectLanguage(code)}
              className={`block w-full h-[40px] text-left px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white ${currentLanguage === code ? 'bg-gray-100 text-gray-900' : 'text-gray-800'
                }`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
