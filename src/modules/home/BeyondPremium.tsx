import Image from "next/image";

type BeyondPremium = {
  title: string;
  description: string;
  image: string;
};

const BEYOND_PREMIUM: BeyondPremium[] = [
  {
    title: "Personalized Itineraries",
    description:
      "Our premium travel services offer tailor-made itineraries crafted to suit your unique preferences and desires.",
    image: "/personalized.svg",
  },
  {
    title: "Exclusive Experiences",
    description:
      "From private charters to behind-the-scenes tours, we offer access to unique opportunities that are designed to elevate your trip to the next level.",
    image: "/exclusive.svg",
  },
  {
    title: "Best Facilities",
    description:
      "Experience the epitome of with our premium facility, designed to provide an unparalleled level of comfort and indulgence.",
    image: "/best-facilities.svg",
  },
];

const BeyondPremium: React.FC = () => {
  return (
    <section className="p-4 lg:py-0 mt-[54px] lg:my-[72px] w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-stretch gap-4 lg:gap-6">
      <div className="col-span-full text-center">
        {/* font-the-signature text-[54px] */}
        <h1 className="text-dark-aquaman text-2xl lg:text-[85px]">
          Beyond Premium
        </h1>
        {/* font-unbounded */}
        <div className="text-dark-teal font-bold text-[22px] lg:text-[32px]">
          Elevate Your Experience
        </div>
      </div>
      {BEYOND_PREMIUM.map((item, key) => {
        return (
          <div
            key={key}
            className="flex h-full flex-col justify-start items-center text-center"
          >
            <Image src={item.image} alt={item.title} width={128} height={128} />
            <h2 className="text-dark-aquaman text-base text-bold lg:text-2xl uppercase">
              {item.title}
            </h2>
            <p className="text-sm lg:text-base">{item.description}</p>
          </div>
        );
      })}
    </section>
  );
};

export default BeyondPremium;
