"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

export const Card = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mt-[100px]">
      {/* Карточка */}
      <article
        className="bg-white p-8 rounded-lg text-center border border-transparent transition-all duration-300 ease-in-out will-change-transform hover:shadow-2xl hover:-translate-y-3 focus-within:shadow-2xl focus-within:-translate-y-3"
        role="region"
        aria-labelledby="card-title"
      >
        {/* Иконка */}
        <div className="mb-4 flex justify-center">
          <FontAwesomeIcon
            icon={faPalette}
            className="text-green-500 w-12 h-12 transition-transform duration-300 ease-in-out will-change-transform"
            aria-hidden="true"
          />
        </div>

        {/* Заголовок */}
        <h3
          id="card-title"
          className="text-lg font-bold text-gray-800 mb-2"
        >
          High Quality Design
        </h3>

        {/* Текст */}
        <p className="text-sm text-gray-600 leading-relaxed">
          Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod.
        </p>
      </article>
    </div>
  );
};
