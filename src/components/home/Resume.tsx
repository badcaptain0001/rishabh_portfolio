import React from "react";
import Box from "@/components/ui/Box";

function Resume() {
  return (
    <div>
        <Box heading="Resume">
          <div className="mt-5 flex flex-col h-[100px] justify-center items-center">
            <p className="text-[15.5px] font-mono text-justify">
                v4.1.25
            </p>
            <p className="flex items-center gap-1 text-[15.5px] font-mono text-justify"
            ><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smile"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>Coming Soon.</p>
          </div>
        </Box>
      </div>
  );
}

export default Resume;
