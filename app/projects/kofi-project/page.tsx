import CldImage from "@/components/ui/cldimage";
import { v2 } from "cloudinary";

v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface imageProps {
  public_id: string;
  secure_url: string;
}

export default async function Page() {
  const { resources } = await v2.search.expression("folder:kofi").execute();

  return (
    <main className="w-full max-w-screen-xl flex flex-col gap-4 md:gap-8 px-8 md:px-16">
      <section className="py-6 md:py-10">
        <h1 className=" capitalize font-semibold text-3xl md:text-5xl font-serif">
          we dey 4 you
        </h1>
      </section>
      <section className="flex flex-wrap items-center justify-evenly gap-4 w-full">
        {resources.map((resource: imageProps) => {
          return (
            <CldImage
              key={resource.public_id}
              src={resource.secure_url}
              width={500}
              height={300}
              alt="Kofi project photos"
              crop="fill"
              enhance={true}
              aspectRatio="16:9"
              className="p-4"
            />
          );
        })}
      </section>
    </main>
  );
}
