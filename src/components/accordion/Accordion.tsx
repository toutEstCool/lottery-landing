"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { accordionData } from "@/moks/moks";

interface AccordionItem {
  title: string;
  content: string;
}

export const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-[920px] mx-auto my-10 p-4 flex flex-col gap-2">
      {accordionData?.map((item: AccordionItem, index) => (
        <div key={index} className="border-b border-gray-200 last:border-b-0">
          {/* Заголовок */}
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center text-left py-4 text-[#333] text-[18px] font-bold focus:outline-none"
            aria-expanded={openIndex === index}
          >
            <span>{item.title}</span>
            <FontAwesomeIcon
              icon={openIndex === index ? faMinus : faPlus}
              className="text-gray-500 transition-transform duration-300"
            />
          </button>

          {/* Контент */}
          <div
            className={`grid transition-all duration-500 ease-in-out ${openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
          >
            <div className="overflow-hidden">
              <p className="text-[#444] font-normal text-[16px] tracking-[0.2px] text-sm pb-4 pr-4 leading-[26px]">
                {item.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
