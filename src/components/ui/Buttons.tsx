import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

function Buttons({ href, text }: Props) {
  return (
    <>
      <Link
        className="bg-white dark:bg-[#292930] border-gray-300 dark:border-[#545454] border-[0.5px] rounded-[20px] border-solid shadow-inner dark:shadow-inner-custom text-[11.5px] py-[5px] px-[14px] cursor-pointer"
        href={href}
        target="_blank"
      >
        <div className="flex justify-between items-center">
          <p className="text-black dark:text-white">{text}</p>
          <ArrowUpRight
            size={14}
            strokeWidth={1}
            className="text-black dark:text-white"
          />
        </div>
      </Link>
    </>
  );
}

export default Buttons;
