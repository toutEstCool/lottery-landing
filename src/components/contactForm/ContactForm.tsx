"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export const ContactForm = () => {
  return (
    <section
      className="w-full md:py-16 flex"
      aria-labelledby="contact-heading"
      role="region"
    >
      <div className="container mx-auto w-[100vw] justify-center px-6 lg:px-8 flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Левая сторона: Контактная информация */}

        {/* Правая сторона: Форма */}
        <div className="lg:w-1/2 rounded-lg p-6 sm:p-8">
          <form className="space-y-8">
            {/* Поле ввода: Ваше имя */}
            <div>
              <label
                htmlFor="name"
                className="sr-only"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-purple-500 outline-none placeholder:text-[#39393a] font-medium"
              />
            </div>

            {/* Поле ввода: Ваш Email */}
            <div>
              <label
                htmlFor="email"
                className="sr-only"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-purple-500 outline-none placeholder:text-[#39393a] font-medium"
              />
            </div>

            {/* Поле ввода: Сообщение */}
            <div>
              <label
                htmlFor="message"
                className="sr-only"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-purple-500 outline-none resize-none placeholder:text-[#39393a] font-medium"
              ></textarea>
            </div>

            {/* Кнопка отправки */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#6332f0] hover:bg-green-500 text-white font-semibold py-3 rounded-md transition-colors duration-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};




// <div className="lg:w-1/2 space-y-8">
//         <h2
//           id="contact-heading"
//           className="text-center md:text-left text-[21px] lg:text-3xl font-bold text-gray-800 mb-10 lg:mb-12"
//         >
//           Please get in touch and our expert support team <br />
//           will answer all your questions.
//         </h2>

//         {/* Блоки контактов */}
//         <div className="space-y-8">
//           {/* Телефон */}
//           <div className="flex items-start space-x-4">
//             <div className="w-12 h-12 flex items-center justify-center bg-pink-500 text-white rounded-full">
//               <FontAwesomeIcon icon={faPhone} className="text-lg" />
//             </div>
//             <div>
//               <h3 className="font-bold text-gray-800">Phone</h3>
//               <p className="text-gray-600">+ 996 507 266 377</p>
//             </div>
//           </div>

//           {/* Email */}
//           <div className="flex items-start space-x-4">
//             <div className="w-12 h-12 flex items-center justify-center bg-yellow-500 text-white rounded-full">
//               <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
//             </div>
//             <div>
//               <h3 className="font-bold text-gray-800">Email</h3>
//               <p className="text-gray-600">info@shumkar.kg</p>
//             </div>
//           </div>

//           {/* Адрес */}
//           <div className="flex items-start space-x-4">
//             <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full">
//               <FontAwesomeIcon icon={faMapMarkerAlt} className="text-lg" />
//             </div>
//             <div>
//               <h3 className="font-bold text-gray-800">Address</h3>
//               <p className="text-gray-600">
//                 Kyrgyzstan Bishkek 6 district 25
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>