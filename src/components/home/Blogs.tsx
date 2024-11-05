import React from "react";
import Image from "next/image";
import Box from "@/components/ui/Box";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "Building a Robust and Flexible Next/Image Component for Next.js Applications",
    description:
      "In the world of web development, optimizing image loading and handling is crucial for creating fast",
    image: "/next.png",
    url: "https://medium.com/codex/building-a-robust-and-flexible-next-image-component-for-next-js-applications-dc18ec097dbc",
  },
];

function Blogs() {
  return (
    <div>
      <Box heading="Blogs" maxHeight="352px">
        <div className="my-5 flex flex-col gap-4">
          {projects.map((project, index) => (
            <Link href={project.url} key={index} target="_blank">
              <div
                key={index}
                className="bg-gray-100 dark:bg-[#1b1b1b] p-2 rounded-lg flex items-center space-x-4 max-w-md group relative hover:bg-gray-200 dark:hover:bg-[#1b1b1b] transition-colors duration-300 cursor-pointer"
              >
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={project.image}
                    alt="Laptop on dark surface"
                    layout="fill"
                    objectFit="cover"
                  />
                  {/* <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-300"></div> */}
                </div>
                <div className="flex-grow overflow-hidden">
                  <h2 className="text-[11.5px] text-gray-800 w-[260px] dark:text-gray-200 truncate">
                    {project.name}
                  </h2>
                  <p className="text-[11.5px] text-gray-500 dark:text-gray-400 truncate">
                    {project.description}
                  </p>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight
                    className="w-4 h-4 text-gray-600 dark:text-gray-400"
                    strokeWidth={1}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href="https://medium.com/@badcaptain0001">
          <p className="text-[11.5px] text-gray-600 dark:text-gray-400 underline cursor-pointer flex items-center justify-end">
            Check Out All the Cool Blogs!
            <ArrowUpRight
              className="w-4 h-4 text-gray-600 dark:text-gray-400"
              strokeWidth={1}
            />
          </p>
        </Link>
      </Box>
    </div>
  );
}

export default Blogs;
