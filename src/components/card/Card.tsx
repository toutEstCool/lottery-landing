"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
  icon?: IconProp
  title?: string
  description?: string
  iconColor?: string
  isHaveBoxShadow?: boolean
}

export const Card = (props: Props) => {
  const { icon, iconColor, title = '', description = '', isHaveBoxShadow } = props
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mt-[100px]">
      {/* Карточка */}
      <article
        className={`bg-white p-8 rounded-lg text-center border border-transparent transition-all duration-300 ease-in-out will-change-transform ${isHaveBoxShadow && 'hover:shadow-2xl'}  hover:-translate-y-3 focus-within:shadow-2xl focus-within:-translate-y-3`}
        role="region"
        aria-labelledby="card-title"
      >
        {/* Иконка */}
        {icon && (<div className="mb-4 flex justify-center">
          <FontAwesomeIcon
            icon={icon}
            className={`text-[${iconColor}] w-12 h-12 transition-transform duration-300 ease-in-out will-change-transform`}
            aria-hidden="true"
          />
        </div>)}

        {/* Заголовок */}
        <h3
          id="card-title"
          className="text-lg font-bold text-gray-800 mb-2"
        >
          {title}
        </h3>

        {/* Текст */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </article>
    </div>
  );
};
