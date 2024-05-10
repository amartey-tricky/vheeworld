import Link from "next/link";
import CldImage from "@/components/ui/cldimage";

const Details = [
  {
    name: "I Win - Accra Mall Food Court",
    href: "projects/i-win",
    src: "projects/IMG_7693_skgtcz",
    location: "Accra Mall",
  },
  {
    name: "I Win - Pantang Hospital",
    href: "projects/i-win",
    src: "projects/IMG_7692_beeglx",
    location: "Pantang Hospital",
  },
  {
    name: "Charity Up North",
    href: "",
    src: "projects/4d87396f-c2ff-484f-ba43-661f75e61164_tt13to",
    location: "Nakwabi",
  },
  {
    name: "We Dey 4 You",
    href: "/projects/ankaful",
    src: "projects/VWF_-_5th_rilqxs",
    location: "Ankaful",
  },
  {
    name: "Fill a Belly",
    href: "/projects/central",
    src: "projects/VWF_-_collab_sz9b6i",
    location: "Madina Zongo Junction"
  },
  {
    name: "Hand From The Heart",
    href: "/projects/chorkor",
    src: "projects/VWF_-_3_utpunz",
    location: "Accra Central"
  },
  {
    name: "The Kofi Project",
    href: "/projects/kofi-project",
    src: "projects/VWF_-_3_utpunz",
    location: "Dzorwulu"
  }
];

export default function Page() {
  return (
    <main className="w-full max-w-screen-xl flex flex-col gap-4 md:gap-8 px-8 md:px-16">
      <section>
        <h1 className=" font-bold text-4xl md:text-6xl py-8 md:py-12 font-mono uppercase">
          Projects
        </h1>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
        {Details.map((detail) => {
          return (
            <article
              key={detail.name}
              className="w-full p-4 border rounded-tr-3xl rounded-bl-3xl flex flex-grow"
            >
              <Link href={detail.href} className="block">
                <CldImage
                  src={detail.src}
                  alt={detail.name}
                  width={630}
                  height={630}
                  className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                />

                <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                  <strong className="font-medium">{detail.name}</strong>

                  <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500" />

                  <p className="mt-0.5 opacity-50 sm:mt-0">{detail.location}</p>
                </div>
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}
