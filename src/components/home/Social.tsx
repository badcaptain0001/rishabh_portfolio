import React from "react";
import Box from "@/components/ui/Box";
import { FaLinkedinIn, FaGithub, FaMedium } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import Link from "next/link";

function Social() {
  const socialMedia = [
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/rishabhsharma0001/",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/badcaptain0001",
    },
    {
      name: "Medium",
      icon: FaMedium,
      url: "https://medium.com/@badcaptain0001",
    },
    {
      name: "Mail",
      icon: TbMailFilled,
      url: "mailto:rishusharmajmi522@gmail.com",
    },
  ];

  return (
    <div>
      <Box heading="Social Media">
        <div className="mt-7 flex justify-center gap-4">
          {socialMedia.map((social, index) => (
            <Link
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-5 border border-gray-300 dark:border-[#545454] rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-[#333] hover:border-gray-400 dark:hover:border-[#666]"
            >
              <social.icon
                className="text-[25px] text-black dark:text-[#b2b2b2] transition-colors duration-300 hover:text-white dark:hover:text-white"
                color="#b2b2b2"
              />
            </Link>
          ))}
        </div>
      </Box>
    </div>
  );
}

export default Social;
