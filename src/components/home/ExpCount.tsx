import React, { useMemo } from "react";
import Box from "@/components/ui/Box";

function ExpCount() {
  const jobStartDate = "2022-08-01";
  const diff = useMemo(() => {
    const currentDate = new Date();
    const diff =
      currentDate.getFullYear() - new Date(jobStartDate).getFullYear();
    return (
      diff + (currentDate.getMonth() - new Date(jobStartDate).getMonth()) / 12
    );
  }, [jobStartDate]);

  return (
    <div>
      <Box heading="Years of Experience">
        <div className="flex items-center justify-center">
        <h2 className="text-[85px] m-0 text-gray-800 dark:text-gray-200 leading-[125px]">
          {diff.toFixed(1)}
        </h2>
        </div>
      </Box>
    </div>
  );
}

export default ExpCount;
