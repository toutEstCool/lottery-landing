'use client';

import React, { useState, useEffect, useRef, useCallback } from "react";

interface SliderProps {
  slides: string[];
  autoScrollInterval?: number;
}

export const Slider = ({ slides, autoScrollInterval = 3000 }: SliderProps) => {
  // Если нет слайдов, сразу возвращаем сообщение
  if (slides.length === 0) {
    return <div className="text-center py-8">Нет доступных изображений</div>;
  }

  const [currentIndex, setCurrentIndex] = useState(1); // Начинаем с виртуального слайда
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const totalSlides = slides.length;

  // Виртуальные слайды для бесшовной прокрутки
  const virtualSlides = [
    slides[totalSlides - 1], // Последний слайд в начало
    ...slides,
    slides[0], // Первый слайд в конец
  ];

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev + 1);
    }
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [isAnimating]);

  const handleTransitionEnd = () => {
    setIsAnimating(false);
    if (currentIndex === 0) {
      setCurrentIndex(totalSlides);
      if (slideRef.current) {
        slideRef.current.style.transition = "none";
        slideRef.current.style.transform = `translateX(-${totalSlides * 100}%)`;
      }
    } else if (currentIndex === totalSlides + 1) {
      setCurrentIndex(1);
      if (slideRef.current) {
        slideRef.current.style.transition = "none";
        slideRef.current.style.transform = `translateX(-100%)`;
      }
    }
  };

  useEffect(() => {
    if (autoScrollInterval > 0) {
      autoScrollRef.current = setInterval(nextSlide, autoScrollInterval);
      return () => {
        if (autoScrollRef.current) clearInterval(autoScrollRef.current);
      };
    }
  }, [autoScrollInterval, nextSlide]);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = "transform 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden w-full h-[60vh] bg-gray-200 rounded-lg">
      {/* Контейнер слайдов */}
      <div
        className="flex"
        ref={slideRef}
        onTransitionEnd={handleTransitionEnd}
        style={{ width: `${100 * virtualSlides.length}%` }}
      >
        {virtualSlides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-[60vh] flex-shrink-0 flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </div>

      {/* Кнопки навигации */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none hover:bg-opacity-75"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none hover:bg-opacity-75"
      >
        ▶
      </button>

      {/* Индикаторы */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setCurrentIndex(index + 1);
                if (autoScrollRef.current) clearInterval(autoScrollRef.current);
              }
            }}
            className={`block w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index + 1
                ? "bg-white bg-opacity-90 scale-125"
                : "bg-white bg-opacity-50"
              }`}
          />
        ))}
      </div>
    </div>
  );
};
