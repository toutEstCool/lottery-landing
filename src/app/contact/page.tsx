import { ContactForm } from "@/components/contactForm/ContactForm";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";



export default function Contact() {
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
