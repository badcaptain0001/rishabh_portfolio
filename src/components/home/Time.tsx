// Updated Time.tsx
import React from "react";
import Box from "@/components/ui/Box";
import RealTimeClock from "@/components/ui/RealTimeClock";

function Time() {
  return (
    <Box heading="Time" subheading="India">
      <div className="flex justify-center items-center mt-3">
        <RealTimeClock />
      </div>
    </Box>
  );
}

export default Time;