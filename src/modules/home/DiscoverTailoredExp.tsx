import Image from "next/image";
import Link from "next/link";
const DiscoverTailoredExp: React.FC = () => {
  return (
    <section
      id="discover-tailored-experiences"
      className="p-4 lg:py-0 mt-[54px] lg:mt-[72px] w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 space-y-4"
    >
      <div className="relative w-full lg:w-1/2 max-h-[188px] lg:max-h-64 aspect-square">
        <Image
          src="/tailored-exp.png"
          alt="tailored-exp"
          fill
          style={{ objectFit: "cover" }}
          className="object-center transition-opacity ease-in-out duration-300 opacity-100"
          loading="lazy"
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="lg:w-1/2 flex flex-col lg:justify-center space-y-2 lg:space-y-4 text-center lg:text-left">
        <h1 className="m-0 text-dark-teal text-[32px] font-bold">
          Discover Tailored Experiences
        </h1>
        <p className="text-sm lg:text-lg">
          Create your own journey, personalized to suit your preferences and
          interests, ensuring a once-in-a-lifetime adventure awaits.
        </p>
        <div>
          <Link
            href="/"
            className="button text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full  font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-dark-teal text-vista-white border-2 border-dark-teal hover:bg-tan hover:text-vista-white hover:border-tan !mt-6"
          >
            Customize Your Trip
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscoverTailoredExp;
