"use client";

import Image from "next/image";

export const BlogCard = () => {
  return (
    <div className="w-full">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-shadow hover:shadow-2xl">
        {/* Контейнер для изображения */}
        <div className="overflow-hidden">
          <Image
            src="https://i.ibb.co/4fbxfQK/3cc2cef16c0b82e714807adf6e0509ec-Photoroom.png"
            alt="Blog Image"
            width={400}
            height={200}
            className="w-full h-64 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>

        {/* Контент карточки */}
        <div className="p-6 sm:p-8">
          {/* Автор и дата */}
          <p className="text-sm text-gray-500 mb-4">
            by <span className="text-red-500 font-medium">Felix Patton</span> | 20 January - 2021
          </p>

          {/* Заголовок */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-6">
            All the Unique Watches to be Auctioned at 2021
          </h3>

          {/* Описание */}
          <p className="text-sm sm:text-base text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.
          </p>

          {/* Ссылка */}
          <a
            href="#"
            className="text-red-500 font-semibold hover:underline"
          >
            + Read More
          </a>
        </div>
      </div>
    </div>
  );
};
