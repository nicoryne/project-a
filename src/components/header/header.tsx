import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div
      className="text-white w-full flex justify-between items-center
    md:px-20 py-5 px-5 sticky top-0 left-0 backdrop-blur-xl"
    >
      <div>
        <Link href={"/"} className="font-[800] text-3xl">Project A</Link>
      </div>
      <div className="flex space-x-12">
        <a href=""
        target="_blank"
        referrerPolicy="no-referrer"
        className="flex items-center justify-center bg-white text-black text-base font-[600] px-5 py-2 rounded-md gap-1 hover:opacity-80 hover:transition transform">
            View Statistics
        </a>

        <Link href="../pages/add-match"
        target=""
        referrerPolicy="no-referrer"
        className="flex items-center justify-center bg-white text-black text-base font-[600] px-5 py-2 rounded-md gap- hover:opacity-80 hover:transition transform">
            Add Match
        </Link>
      </div>
    </div>
  );
};
