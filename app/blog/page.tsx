import { cormorant } from "@/components/ui/fonts";
import CldImage from "@/components/ui/cldimage";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col md:px-16">
      <section>
        <h1
          className={`${cormorant.className} py-8 font-bold text-4xl md:text-6xl uppercase`}
        >
          Blog
        </h1>
      </section>
      <section className="container py-8 md:py-12 font-medium flex flex-col-reverse gap-8 md:gap-16">
        <article>
          <Link
            href="/blog/All-You-Need-To-Know-About-Vhee-World-Foundation"
            className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
          >
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  All You Need To Know About Vhee World Foundation
                </h3>

                <p className="mt-1 text-xs font-medium text-gray-600">
                  By Kumi Robert
                </p>
              </div>

              <div className="hidden sm:block sm:shrink-0">
                <CldImage src="VHEEWORLD - WEBSITE/IMG_5446_lkhdgg" alt="" width={40} height={40} className="size-16 rounded-lg object-cover shadow-sm" />
              </div>
            </div>

            <div className="mt-4">
              <p className="text-pretty text-sm text-gray-500">
              Vhee World Foundation is a registered, funding/non-profit charity organisation that was established in 2015 by an ambitious young lady, Ms. Violet Lawson at age 19.
              </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Published</dt>
                <dd className="text-xs text-gray-500">9th January, 2021</dd>
              </div>

              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">
                  Reading time
                </dt>
                <dd className="text-xs text-gray-500">5 minute</dd>
              </div>
            </dl>
          </Link>
        </article>
        <article>blog 2</article>
      </section>
    </main>
  );
}
