import CldImage from "@/components/ui/cldimage";

export default function Page() {
  return (
    <main className="flex flex-col gap-y-6 md:gap-y-12 px-6 py-4 md:px-8 md:py-8">
      <section>
        <h1 className="text-4xl font-extrabold md:text-6xl mt-4 ml-6 pb-4">
          About Us
        </h1>
        <p className="font-medium ml-8 max-w-lg text-slate-400">
          Vheeworld Foundation has been on a mission to reduce streetism to the
          barest minimun or at least help improve their plight
        </p>
      </section>
      <section>
        <h2 className="text-2xl md:text-4xl font-bold text-slate-600 p-4 md:p-6">
          About VheeWorld
        </h2>
        <article className="grid grid-col-1 gap-4 justify-items-center p-8 text-justify md:grid-cols-2 md:gap-8">
          <div>
            <p className="pb-8">
              Vhee World Foundation is a nonprofit organization committed to
              tackling the issue of streetism and supporting vulnerable children
              in Ghana. Through a range of initiatives, including education,
              mentorship, and resource provision, the foundation aims to uplift
              and empower children who are at risk of living on the streets. By
              offering these children access to education and mentorship
              programs, the foundation seeks to equip them with the necessary
              skills and knowledge to break the cycle of poverty and create a
              better future for themselves.
            </p>
            <CldImage
            src="VHEEWORLD - WEBSITE/vheeworld/IMG_5428_ymhqgz"
            alt="VheeWorld undertaking a project"
            width={603}
            height={450}
            priority="false"
            className="rounded-lg"
            />
          </div>
          <div>
            <p>
              At the core of the foundation&apos;s mission is the belief in the
              transformative power of education. By providing educational
              opportunities to children in underserved communities, the
              foundation not only addresses immediate needs but also invests in
              long-term solutions to combat streetism. Through partnerships with
              local schools and community organizations, the foundation works to
              ensure that every child has access to quality education and the
              support they need to succeed academically and professionally.
            </p>
            <p>
              In addition to education, the Vhee World Foundation recognizes the
              importance of holistic support for vulnerable children. Through
              mentorship programs and access to essential resources such as
              food, clothing, and healthcare, the foundation strives to meet the
              diverse needs of these children and create a nurturing environment
              where they can thrive. By fostering a sense of belonging and
              providing a support network, the foundation aims to empower
              children to overcome adversity and realize their full potential.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
