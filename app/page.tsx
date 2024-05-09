import Hero from "@/components/hero";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="flex flex-col md:p-8">
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.8)] opacity-50 blur-[80px]"></div>
      </div>
      <Hero />
      <About />
    </main>
  );
}
