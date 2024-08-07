"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Sidebar = {
  name: string;
  link: string;
};

const sideBar: Sidebar[] = [
  {
    name: "Homepage",
    link: "/",
  },
  {
    name: "Customize Your Trip",
    link: "/",
  },
  {
    name: "Destination",
    link: "/",
  },
  {
    name: "Article",
    link: "/",
  },
];

const Header = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <nav className="p-4 w-full max-w-7xl mx-auto inline-flex justify-between items-center">
      <Link href="/">
        <Image
          alt="logo-mobile"
          src="/logo-zamrood-mobile.png"
          width={135}
          height={50}
          fetchPriority="high"
          sizes="30vw"
        />
      </Link>
      <div onClick={() => setShowSidebar(true)}>
        <Image
          alt="hamburger-icon"
          src="/hamburger.svg"
          width={56}
          height={56}
        />
      </div>

      <div
        className={`fixed inset-0 transition duration-300 ${
          showSidebar ? "opacity-100 z-10" : "opacity-0 -z-10"
        }`}
      >
        <div
          className={`fixed inset-0 bg-gray-900/80 transition duration-300 ease-in-out ${
            showSidebar ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="fixed inset-0 flex">
          <div className={`relative flex w-full max-w-[100vw_-_72px] flex-1`}>
            <div
              className="right-full top-0 h-full w-16 justify-center opacity-100"
              onClick={() => setShowSidebar(false)}
            />
            <div
              className={`w-[calc(100vw - 72px)] flex grow flex-col gap-y-5 overflow-y-auto bg-white p-4 text-right transition duration-300 ease-in-out ${
                showSidebar ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="w-full h-[51px]" />
              <div className="w-full inline-flex justify-end">
                <Image
                  alt="close"
                  src="/close.svg"
                  width={50}
                  height={50}
                  onClick={() => setShowSidebar(false)}
                />
              </div>
              <div className="mt-[156px] flex flex-col space-y-6">
                {sideBar.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="px-6 py-2.5 text-dark-aquaman text-base"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  target="_blank"
                  href="/"
                  className="button text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-transparent text-dark-teal border-2 border-dark-teal hover:bg-dark-teal hover:text-vista-white hover:border-dark-teal w-fit ml-auto"
                >
                  Need Assistance?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
