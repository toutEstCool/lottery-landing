"use client";

import Image from "next/image";
import { ButtonWithHoverEffect } from "../btnWithHover/ButtonWithHove";

export const Banner = () => {
  return (
    <section
      className="relative h-[100vh] md:h-[80vh] w-full bg-gradient-to-r from-indigo-900 to-purple-700 overflow-hidden pt-[125px] lg:pt-[105px]"
      aria-labelledby="banner-heading"
      role="banner"
    >
      {/* Контейнер баннера */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-[1110px] mx-auto px-6 py-10 lg:py-2 gap-6 lg:gap-12">
        {/* Левая сторона: текстовый блок */}
        <div className="text-center lg:text-left flex-1 order-1">
          <h1
            id="banner-heading"
            className="text-2xl sm:text-3xl lg:text-[28px] font-bold text-white leading-snug lg:leading-[36px]"
          >
            Rick and Morty<br className="hidden sm:block" />
          </h1>
          <p className="mt-3 text-white text-sm sm:text-base lg:text-lg opacity-80 leading-relaxed lg:leading-7">
            Beth and Jerry head off on a romantic getaway. Rick and Summer throw a huge intergalactic house party, broh.
          </p>
          <div className="mt-4">
            <ButtonWithHoverEffect text="Shumkar Info" />
          </div>
        </div>

        {/* Правая сторона: изображение часов */}
        <div className="flex-1 flex justify-center lg:justify-end order-2 lg:order-2 mb-6 lg:mb-0">
          <Image
            src="https://i.ibb.co/gtWdPCr/2a88ef5c9ae0c9c5d4af689b0ec9ad1c-Photoroom.png"
            alt="Smart digital watch"
            width={450}
            height={500}
            priority
            loading="eager"
            className="animate-floating"
          />
        </div>
      </div>
    </section>
  );
};
