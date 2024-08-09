import Image from "next/image";
import Link from "next/link";

const Website: React.FC = () => {
  return (
    <section className="py-[54px] lg:pb-0 px-4 w-full max-w-7xl mx-auto">
      <div
        className="w-full p-6 flex flex-col lg:flex-row space-y-2 justify-between items-center bg-[lightgray] bg-no-repeat bg-center bg-cover bg-[url(/pandooin-bg.webp)]"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.36) 0%, rgba(0, 0, 0, 0.36) 100%), url('/pandooin-bg.webp')",
        }}
      >
        <Image
          src="/zamrood-white.svg"
          alt="zamrood-white"
          width={0}
          height={0}
          className="h-[54px] w-auto"
        />
        <div className="flex flex-col space-y-2 justify-center lg:justify-end text-right">
          <div className="text-vista-white text-base text-center lg:text-right">
            Want to see other destinations? Check us out at our website
          </div>
          <Link
            target="_blank"
            href="https://pandooin.com/"
            className="text-vista-white inline-flex items-center justify-center lg:justify-end gap-2"
          >
            <span className="text-xl font-bold underline">Pandooin.com</span>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 16.013L15.8333 5.17969M15.8333 5.17969V15.5797M15.8333 5.17969H5.43333"
                stroke="#FAF9F5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Website;
