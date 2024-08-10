"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

type Navigation = {
  name: string;
  link: string;
};

const NAVIGATIONS: Navigation[] = [
  {
    name: "Homepage",
    link: "/",
  },
  {
    name: "Customize Your Trip",
    link: "/#discover-tailored-experiences",
  },
  {
    name: "Destination",
    link: "/destination",
  },
  {
    name: "Article",
    link: "/article",
  },
];

const HeaderDesktop: React.FC = () => {
  const [name, setName] = useState<string>("Homepage");
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    (e: any) => {
      const window = e.currentTarget;
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <section
      className={`hidden fixed top-0 z-40  w-full lg:inline-flex justify-center ${
        y > 899 ? "bg-vista-white" : "bg-transparent"
      }`}
    >
      <div className="p-4 w-full max-w-7xl mx-auto inline-flex justify-between items-center">
        <Link href="/">
          {y > 899 ? (
            <Image
              alt="logo-mobile"
              src="/logo-zamrood-mobile.png"
              width={135}
              height={50}
              fetchPriority="high"
              sizes="30vw"
            />
          ) : (
            <Image
              alt="logo-mobile"
              src="/zamrood-white.svg"
              width={135}
              height={50}
              fetchPriority="high"
              sizes="30vw"
            />
          )}
        </Link>
        <div className="inline-flex items-center gap-6">
          <div className="hidden lg:inline-flex items-center gap-6">
            {NAVIGATIONS.map((navigation, key) => (
              <Link
                key={key}
                href={navigation.link}
                className={` px-6 py-2.5  text-base font-bold  hover:border-b-[2px] ${
                  y > 899
                    ? "text-dark-aquaman hover:border-b-dark-teal"
                    : "text-white hover:border-b-white"
                }  ${
                  navigation.name === name && "border-b-white border-b-[2px]"
                }`}
                onClick={() => setName(navigation.name)}
              >
                {navigation.name}
              </Link>
            ))}

            <Link
              href="/"
              className={`text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-transparent w-fit ml-auto ${
                y > 899
                  ? "text-dark-teal border-2 border-dark-teal hover:bg-dark-teal hover:text-vista-white hover:border-dark-teal"
                  : "text-white border-2 border-white hover:bg-dark-teal hover:text-vista-white hover:border-dark-teal"
              }`}
            >
              Need Assistance?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderDesktop;
