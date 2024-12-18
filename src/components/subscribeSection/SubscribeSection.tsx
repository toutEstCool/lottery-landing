"use client";

import { ButtonWithHoverEffect } from "../btnWithHover/ButtonWithHove";

export const SubscribeSection = () => {
  return (
    <section
      className="md:w-[600px] py-10 px-6 bg-white text-center"
      aria-labelledby="subscribe-heading"
    >
      {/* Контейнер */}
      <div className="max-w-[1110px] mx-auto">
        {/* Форма подписки */}
        <form
          className="flex flex-col lg:flex-row items-center justify-center gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Поле ввода */}
          <div className="flex-1 w-full lg:w-auto">
            <input
              type="email"
              placeholder="Email Address"
              aria-label="Enter your email address"
              className="w-full py-3 px-6 border-2 border-[#39393a] rounded-md text-gray-700 placeholder:text-[#39393a] font-medium"
              required
            />
          </div>

          {/* Кнопка подписки */}
          <ButtonWithHoverEffect text="Subscribe" />
        </form>

        {/* Текст под формой */}
        <div className="mt-8">
          <h3 className="text-lg font-bold text-[#6332f0] mb-2">
            GET THE APP NOW
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Solutions by Voltamic Watch Application for More Faster Access.
          </p>
        </div>
      </div>
    </section>
  );
};
