import Image from "next/image";
import React from "react";
import LocalFont from "next/font/local";

import Icon from "../../public/icon.webp"; 

const akiraExpanded = LocalFont({
  src: "../../public/fonts/AkiraExpanded.otf",
  display: "swap",
});

export default function Header() {
  return (
    <div className="text-black bg-white w-full flex justify-between items-center md:px-20 py-3 px-5 top-0 left-0 backdrop-blur-xl">
      <Image priority src={Icon} width={70} height={60} alt="CEL Black Logo" />

      <nav className="flex w-full px-5 space-x-4 md:space-x-16 md:px-16">
        <a className={`${akiraExpanded.className} text-xl`}>LIVE</a>
        <a className={`${akiraExpanded.className} text-xl`}>MATCHES</a>
        <a className={`${akiraExpanded.className} text-xl`}>TEAMS</a>
      </nav>

      <button
        className={`${akiraExpanded.className} text-white bg-red-600 rounded-full text-sm px-4 py-1 md:text-base md:px-8 md:py-2`}
      >
        Login
      </button>
    </div>
  );
}
