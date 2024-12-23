import { BlogCard } from "@/components/blogCard/BlogCard";
import { Card } from "@/components/card/Card";
import { ContactForm } from "@/components/contactForm/ContactForm";
import { FeaturesSection } from "@/components/featuresSection/FeaturesSection";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Slider } from "@/components/slider/Slider";
import { VideoSection } from "@/components/videoSection/VideoSection";
import { firstData, secondData } from "@/moks/moks";


export default function Contact() {
  const slides = [
    "https://i.pinimg.com/736x/f9/8c/cd/f98ccdc458176a2ef1a5e7a6162e6fbe.jpg",
    "https://via.placeholder.com/800x400.png?text=Slide+2",
    "https://via.placeholder.com/800x400.png?text=Slide+3",
  ];
  return (
    <>
      <div>
        <Header />
      </div>
      <main className="mx-auto flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex justify-center w-full">
          <div className="max-w-[1110px] mx-auto mt-[90px]">
            <h2 className="text-center text-[#333] text-[30px] md:text-[38px] font-bold mb-[20px]">Contact us</h2>
            <ContactForm />
          </div>
        </div>
      </main >
      <Footer />
    </>
  );
}
