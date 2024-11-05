import React from "react";
import Box from "@/components/ui/Box";
import Buttons from "@/components/ui/Buttons";

function Availability() {
  return (
    <div>
        <Box heading="Mode">
          <div className="mt-5 flex flex-col gap-4">
            <p className="text-[11px]">
            Design × Open Source 🦾
            Creating solutions for the community. Let&apos;s collaborate!
            </p>
            <Buttons href="https://cal.com/itsmerishabh/15min" text="Let's Talk" />
          </div>
        </Box>
      </div>
  );
}

export default Availability;
