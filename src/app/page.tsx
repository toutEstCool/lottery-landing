import { Accordion } from "@/components/accordion/Accordion";
import { Banner } from "@/components/banner/Banner";
import { BlogCard } from "@/components/blogCard/BlogCard";
import { Card } from "@/components/card/Card";
import { ContactForm } from "@/components/contactForm/ContactForm";
import { FeaturesSection } from "@/components/featuresSection/FeaturesSection";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { SubscribeSection } from "@/components/subscribeSection/SubscribeSection";
import { VideoSection } from "@/components/videoSection/VideoSection";
import { firstData, secondData } from "@/moks/moks";


export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Banner />
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
        <div className="max-w-[1110px] mx-auto mt-[100px]">
          <h2 className="text-center text-[#333] text-[30px] md:text-[38px] font-bold mb-[20px]">Frequently Asked Questions</h2>
          <Accordion />
        </div>
        {/* Subscribe */}
        <div className="max-w-[1110px] mx-auto mt-[50px]">
          <h2 className="text-center text-[#333] text-[30px] md:text-[38px] font-bold mb-[20px]">Subscribe To Get Updates</h2>
          <SubscribeSection />
        </div>
        {/* News */}
        <div className="max-w-[1110px] mx-auto mt-[120px]">
          <h2 className="text-center text-[#333] text-[30px] md:text-[38px] font-bold mb-[20px]">News & Updates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 mt-[100px]">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
        {/* Contact */}
        <div className="max-w-[1110px] mx-auto mt-[50px]">
          <h2 className="text-center text-[#333] text-[30px] md:text-[38px] font-bold mb-[20px]">Contact us</h2>
          <ContactForm />
        </div>
      </main >
      <Footer />
    </>
  );
}
