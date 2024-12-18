import { Banner } from "@/components/banner/Banner";
import { Card } from "@/components/card/Card";
import { Header } from "@/components/header/Header";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Banner />
      </div>
      <div className="max-w-[1110px] mx-auto flex items-center flex-wrap justify-between">
        <Card />
        <Card />
        <Card />
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Main</h1>
      </main>
    </>
  );
}
