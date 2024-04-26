import DonateForm from "@/components/donate-form";

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center p-6 md:p-10">
      <h1 className="uppercase text-4xl font-semibold font-serif">donate to a worthy course</h1>
      <DonateForm />
    </section>
  );
}