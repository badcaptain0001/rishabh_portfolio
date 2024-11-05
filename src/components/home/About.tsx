import React from "react";
import Box from "@/components/ui/Box";

function About() {
  return (
    <div>
      <Box heading="About" subheading="Rishabh Sharma">
        <div className="mt-5 flex flex-col gap-4">
          <p className="text-[11.5px] text-justify">
            Developer specializing in Next.js, Tailwind CSS, and Framer Motion. Dedicated to crafting elegant, responsive interfaces that prioritize user experience. Proven track record of delivering visually striking and highly functional digital solutions with a focus on modern web standards and performance optimization.
          </p>
        </div>
      </Box>
    </div>
  );
}

export default About;
