import Link from "next/link";
import CldImage from "@/components/ui/cldimage";

const Details = [
  {
    name: "I Win",
    href: "",
    src: "projects/IMG_7693_skgtcz",
    date: "26th December, 2023",
  },
];

export default function Page() {
  return (
    <main className="w-full max-w-screen-xl flex flex-col gap-4 md:gap-8 px-8 md:px-16">
      <section>
        <h1 className=" font-bold text-4xl md:text-6xl py-8 md:py-12 font-mono uppercase">
          Projects
        </h1>
      </section>
      <section>
        {Details.map((detail) => {
          return (
            <article key={detail.name} className="md:w-[40%]">
              <Link href="#" className="block">
                <CldImage src={detail.src} alt={detail.name} width={230} height={230} className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72" />

                <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                  <strong className="font-medium">{detail.name}</strong>

                  <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                  <p className="mt-0.5 opacity-50 sm:mt-0">
                    {detail.date}
                  </p>
                </div>
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}
