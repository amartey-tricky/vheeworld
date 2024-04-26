import Link from "next/link";

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center p-6 md:p-10">
      <h2 className="font-semibold text-6xl text-center text-slate-500 capitalize">
        who are we?
      </h2>
      <hr className="w-[300px] m-2 text-black" />
      <p className="p-8 text-justify font-medium lg:mx-16 lg:px-16 max-w-md">
        Vhee Foundation was founded in 2015. The sole aim of the foundation was
        to help the less priviledged especially those who find themselves on the
        street. Since our inception, we have strived to tackle streetism,
        poverty and parental negligence in very touching ways through projects
        that directly target and reach those in dire need...
      </p>
      <Link
        href="/about"
        className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md shadow-2xl group"
      >
        <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
        <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
          <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
          <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
        </span>
        <span className="relative text-white">Learn more</span>
      </Link>
    </section>
  );
}
