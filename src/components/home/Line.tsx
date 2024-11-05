import React from "react";
import Box from "@/components/ui/Box";

function Line() {
  return (
    <div>
        <Box heading="Quote">
          <div className="mt-5 flex flex-col gap-4">
            <p className="text-[14.6px] font-mono">
            <span className="">“To err is human, to forgive is design.”</span>
            </p>
          </div>
        </Box>
      </div>
  );
}

export default Line;
