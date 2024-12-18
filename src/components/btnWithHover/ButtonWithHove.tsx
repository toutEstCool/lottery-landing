"use client";

import { useState } from "react";


interface Props {
  text: string
}

export const ButtonWithHoverEffect = (props: Props) => {
  const { text = 'Button' } = props
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="relative overflow-hidden bg-[#6332f0] text-white font-semibold py-3 px-6 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-red-500 transition-shadow duration-300"
      aria-label="Click to explore products"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Текст кнопки */}
      <span className="relative z-10">{text}</span>

      {/* Анимация заливки */}
      <span
        className={`absolute inset-0 bg-green-500 transition-all duration-500 ease-in-out ${isHovered ? "animate-slide-in" : "animate-slide-out"
          }`}
        aria-hidden="true"
      />
    </button>
  );
};
