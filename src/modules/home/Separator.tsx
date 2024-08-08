import Image from "next/image";

const Separator: React.FC = () => {
  return (
    <section className="p-4 lg:mt-[72px] w-full max-w-7xl mx-auto">
      <Image
        src="/separator.svg"
        alt="separator"
        width={1096}
        height={97}
        className="w-full"
      />
    </section>
  );
};

export default Separator;
