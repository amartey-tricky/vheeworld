import Image from "next/image";
import Hero from "@/components/hero";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="flex flex-col md:p-8">
      <Hero />
      <About />
    </main>
  );
}
