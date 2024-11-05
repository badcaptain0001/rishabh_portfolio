import React from "react";
import Box from "@/components/ui/Box";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

function Projects() {
  const projects = [
    {
      name: "React Calendar Heatmap",
      description:
        "This is a simple react component that displays a calendar heatmap with date and status. It is highly customizable and easy to use.",
      image: "/cal.png",
      url: "https://react-calendar-heatmap.vercel.app/",
    },
    {
      name: "Nightflock",
      description:
        "A simple and elegant theme for Agency, Portfolio, and Corporate Websites.",
      image: "/bird.png",
      url: "https://nightflock.vercel.app/",
    },
    {
      name: "Airbnb Clone",
      description:
        "A clone of the Airbnb website with a focus on the user interface and user experience.",
      image: "/air.png",
      url: "https://airbnbyt.vercel.app/",
    },
    {
      name: "Starbucks Clone",
      description:
        "A clone of the Starbucks website with a focus on the user interface and user experience.",
      image: "/star.jpg",
      url: "https://starbucks-me.vercel.app/",
    },
  ];

  return (
    <div>
      <Box heading="Projects" maxHeight="352px">
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
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-300"></div>
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
      </Box>
    </div>
  );
}

export default Projects;
