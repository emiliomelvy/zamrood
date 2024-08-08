import Link from "next/link";
import Image from "next/image";

type SocialMedia = {
  src: string;
  link: string;
};

const SOCIAL_MEDIA: SocialMedia[] = [
  {
    src: "/facebook.svg",
    link: "/",
  },
  {
    src: "/instagram.svg",
    link: "/",
  },
  {
    src: "/email.svg",
    link: "/",
  },
];

const Footer = () => {
  return (
    <section className="mt-[54px] bg-dark-aquaman w-full">
      <div className="px-4 py-6 w-full max-w-7xl mx-auto flex flex-col lg:flex-row space-y-4 justify-between items-center">
        <p className="text-vista-white">
          © 2023 Zamrood by PT Teknologi Pandu Wisata
        </p>
        <div className="w-fit inline-flex gap-6 items-center justify-center lg:justify-end">
          {SOCIAL_MEDIA.map((item, key) => {
            return (
              <Link key={key} href={item.link} target="_blank">
                <Image src={item.src} alt={item.src} width={24} height={24} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
