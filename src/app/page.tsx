import { BlogCard } from "@/components/blogCard/BlogCard";
import { Card } from "@/components/card/Card";
import { FeaturesSection } from "@/components/featuresSection/FeaturesSection";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Slider } from "@/components/slider/Slider";
import { VideoSection } from "@/components/videoSection/VideoSection";
import { firstData, secondData } from "@/moks/moks";


export default function Home() {
  const slides = [
    "https://i.pinimg.com/736x/f9/8c/cd/f98ccdc458176a2ef1a5e7a6162e6fbe.jpg",
    "https://via.placeholder.com/800x400.png?text=Slide+2",
    "https://via.placeholder.com/800x400.png?text=Slide+3",
  ];
  return (
    <>
      <div>
        <Header />
        {/* <Banner /> */}
        <div className="mt-[60px]">
          <Slider slides={slides} autoScrollInterval={3000} />
        </div>
      </div>
      <main className="mx-auto flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* First Card Section */}
        <div className="max-w-[1110px] mx-auto flex items-center flex-wrap justify-between">
          {firstData?.map((item, index) => (
            <Card key={index} icon={item.icon} description={item.description} title={item.title} iconColor={item.iconColor} isHaveBoxShadow />
          ))}

        </div>
        {/* Features Section */}
        <div className="max-w-[1110px] mx-auto">
          <FeaturesSection />
        </div>
        {/* Amazing Features */}
        <div className="max-w-[1110px] mx-auto">
          <h2 className="text-[38px] font-bold leading-[1.3px] text-[#333] text-center">Amazing Features</h2>
          <div className="max-w-[1110px] mx-auto flex items-center flex-wrap justify-between">
            {secondData?.map((item, index) => (
              <Card key={index} icon={item.icon} description={item.description} title={item.title} iconColor={item.iconColor} />
            ))}
          </div>
        </div>
        {/* Video Section  */}
        <div className="w-full">
          <VideoSection />
        </div>
        {/* Accordion */}
        {/* <div className="max-w-[1110px] mx-auto mt-[100px]">
          <h2 className="text-center text-[#333] text-[30px] md:text-[38px] font-bold mb-[20px]">Frequently Asked Questions</h2>
          <Accordion />
        </div> */}
        {/* Subscribe */}
        {/* <div className="max-w-[1110px] mx-auto mt-[50px]">
          <h2 className="text-center text-[#333] text-[30px] md:text-[38px] font-bold mb-[20px]">Subscribe To Get Updates</h2>
          <SubscribeSection />
        </div> */}
        {/* News */}
        <div className="max-w-[1110px] mx-auto mt-[120px] mb-[120px]">
          <h2 className="text-center text-[#333] text-[30px] md:text-[38px] font-bold mb-[20px]">News & Updates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 mt-[100px]">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
        {/* Contact */}
        {/* <div className="max-w-[1110px] mx-auto mt-[50px]">
          <h2 className="text-center text-[#333] text-[30px] md:text-[38px] font-bold mb-[20px]">Contact us</h2>
          <ContactForm />
        </div> */}
      </main >
      <Footer />
    </>
  );
}
