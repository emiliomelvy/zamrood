import Link from "next/link";
import Image from "next/image";

const ExploreMore: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-[54px] lg:py-[26px] px-4">
      <div className="w-full inline-flex justify-center lg:justify-end">
        <Link
          href="/"
          className="group w-fit inline-flex gap-4 items-center cursor-pointer"
        >
          <Image
            src="/arrow-right.svg"
            alt="arrow-right"
            width={40}
            height={40}
          />
          <span className="text-base text-dark-teal font-bold group-hover:text-tan transition-colors ease-in-out duration-300">
            EXPLORE MORE
          </span>
        </Link>
      </div>
    </section>
  );
};

export default ExploreMore;
