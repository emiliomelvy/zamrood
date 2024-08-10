import Link from "next/link";

const Hero = ({ ref, heroSectionInview }: any) => {
  return (
    <section className="bg-cover bg-center bg-no-repeat bg-[url('/hero-bg.png')] py-20">
      <div className="px-4 py-52 w-full max-w-7xl mx-auto text-center lg:text-left">
        <h1 className="font-the-signature text-[86px] m-0 text-tan text-5xl whitespace-nowrap leading-[0.3] lg:leading-none">
          Premium Travel
        </h1>
        <div className="text-vista-white text-2xl font-bold font-unbounded">
          Beyond Expectation
        </div>
        <div className="mx-auto lg:mx-0 text-vista-white text-base lg:text-2xl max-w-[708px] !leading-relaxed">
          Experience the finest that Indonesia has to offer with our curated
          selection of premium trips, ensuring comfort every step of the way
        </div>
        <Link
          className="button text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-transparent text-white border-2 border-white hover:bg-tan hover:text-vista-white hover:border-tan mt-6"
          href="/"
        >
          Take me there
        </Link>
      </div>
    </section>
  );
};

export default Hero;
