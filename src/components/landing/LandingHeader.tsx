import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import LocalFont from 'next/font/local';

import Icon from '../../../public/icon.webp';
import VectorBG from '../../../public/bg_red_angular.svg';

const akiraExpanded = LocalFont({
  src: '../../../public/fonts/AkiraExpanded.otf',
  display: 'swap',
});

export default function Header() {
  return (
    <div
      className="text-black bg-white w-full flex justify-between items-center md:px-20 py-3 px-5 top-0 left-0 backdrop-blur-xl"
    >
      <Image
        priority
        src={Icon}
        width={70}
        height={60}
        alt="CEL Black Logo"
      />
        <a className={`${akiraExpanded.className} text-xl`}>LIVE</a>
        <a className={`${akiraExpanded.className} text-xl`}>MATCHES</a>
        <a className={`${akiraExpanded.className} text-xl`}>TEAMS</a>
      <button className={`${akiraExpanded.className} text-base text-white bg-red-600 rounded-full md:px-8 py-2`}>Login</button>
    </div>
  );
}
