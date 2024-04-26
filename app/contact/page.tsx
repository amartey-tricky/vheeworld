import ContactForm from "@/components/contact-form";

export default function Page() {
  return (
    <section className="flex flex-col p-8 items-center justify-between">
      <h1 className="uppercase font-bold text-3xl md:text-5xl text-slate-600">Contact Us</h1>
      <ContactForm />
    </section>
  );
}