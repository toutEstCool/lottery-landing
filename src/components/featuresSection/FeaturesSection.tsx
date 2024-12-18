"use client";

import Image from "next/image";

export const FeaturesSection = () => {
  return (
    <section
      className="relative bg-gradient-to-b pt-16 lg:pt-24 pb-20 overflow-hidden"
      aria-labelledby="features-heading"
    >
      {/* Контейнер */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Левая сторона: текст */}
        <div className="lg:w-1/2 text-left order-1 lg:order-1">
          <h2
            id="features-heading"
            className="text-[25px] sm:text-[35px] font-bold text-[#333] leading-snug mb-6"
          >
            Awesome Digital Watch Can <br /> Make Your Life Easier
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
            minim veniam.
          </p>
          <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
            <li>• Sleep Quality Monitor</li>
            <li>• Unlimited users & Social network interface</li>
            <li>• Heart Rate Monitor & Step Counter</li>
            <li>• Wi-Fi Data Sync and Weather Update</li>
          </ul>
        </div>

        {/* Правая сторона: изображение */}
        <div className="lg:w-1/2 flex justify-center relative order-2 lg:order-2">
          {/* Иконки */}
          <div className="absolute w-full h-full flex items-center justify-center -z-10">
            <div className="absolute w-10 h-10 bg-[#f4ae49] rounded-full top-8 left-16"></div>
            <div className="absolute w-10 h-10 bg-[#ba0613] rounded-full bottom-8 right-16"></div>
            <div className="absolute w-10 h-10 bg-[#5256a4] rounded-full top-1/2 -translate-y-1/2 left-8"></div>
            <div className="absolute w-10 h-10 bg-[#438d59] rounded-full top-1/2 -translate-y-1/2 right-8"></div>
          </div>
          {/* Часы */}
          <Image
            src="https://i.ibb.co/mX6rx3y/88d5b3684d7d8dc3f80741ad9846caef-Photoroom.png"
            alt="Digital Watch"
            width={450}
            height={450}
            priority
            className="animate-float"
          />
        </div>
      </div>

      {/* Волнистый задний фон */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 bg-white"
        style={{
          clipPath: "path('M0,100 C150,50 350,150 500,100 C650,50 850,150 1000,100 L1000,200 L0,200 Z')",
        }}
        aria-hidden="true"
      ></div>
    </section>
  );
};
