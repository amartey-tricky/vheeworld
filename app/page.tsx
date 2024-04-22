import Image from "next/image";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex flex-col md:p-8">
      <Hero />
    </main>
  );
}
