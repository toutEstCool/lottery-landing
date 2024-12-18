"use client";

import { useState } from "react";
import { Youtube } from 'lucide-react';

export const VideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section
      className="relative w-[100%] h-[40vh] md:h-[510px] bg-gradient-to-r from-indigo-900 to-purple-700 flex flex-col items-center justify-center text-center px-6"
      aria-labelledby="video-section-heading"
      role="region"
    >
      {/* Заголовок и описание */}
      <h2
        id="video-section-heading"
        className="text-3xl md:text-4xl font-bold text-white mb-4"
      >
        Rick and Morty
      </h2>
      <p className="text-gray-300 text-sm md:text-base max-w-md leading-relaxed mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>

      {/* Кнопка проигрывателя */}
      <div className="p-[10px] bg-[#7457bd] rounded-full">
        <button
          onClick={toggleModal}
          aria-label="Play Video"
          className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <Youtube size={40} />
        </button>
      </div>
      {/* Модальное окно с видео */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal"
        >
          <div className="relative w-full max-w-3xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/OV_djeGa2q8?si=qUT0hbb_jP74FB9K"
              title="Watch Guidelines Video"
              allow="autoplay; fullscreen"
              className="w-full h-full"
            ></iframe>
            {/* Кнопка закрытия */}
            <button
              onClick={toggleModal}
              aria-label="Close Video"
              className="absolute top-3 right-3 text-white text-3xl hover:text-gray-400"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
