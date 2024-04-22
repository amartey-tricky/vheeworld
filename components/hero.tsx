import { permanent_marker } from "./ui/fonts";
import { Donate } from "./ui/donate";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container min-h-[calc(100vh-158px)]">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1
            className={`${permanent_marker.className} max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl`}
          >
            Empowering Street Children
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Our mission is to provide shelter, education, and opportunities for
            street children to thrive and build a better future.
          </p>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Give hope and a brighter future to children in need. Donate today!
          </p>
          <div className="flex flex-row gap-4 md:gap-8">
            <Donate />
            <Link
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
