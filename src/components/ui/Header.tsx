import Image from "next/image";
import React from "react";
import Buttons from "./Buttons";

function Header() {
  return (
    <div className="pt-5 pb-4 border-b-[0.5px] border-gray-300 dark:border-[#545454] flex justify-between items-center">
      <div className="flex items-center gap-[15px]">
        <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden">
          <Image src="/me.jpg" fill alt="Rishabh Sharma" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-300"></div>
        </div>
        <div className="font-signature text-2xl text-gray-900 dark:text-gray-100">Rishabh Sharma</div>
      </div>
      <Buttons href="https://cal.com/itsmerishabh/15min" text="Contact Me" />
    </div>
  );
}

export default Header;