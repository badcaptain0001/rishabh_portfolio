"use client";
import { Bar, BarChart, CartesianGrid } from "recharts";
import Box from "@/components/ui/Box";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
    { "month": "May 3", "desktop": 26 },
    { "month": "May 4", "desktop": 59 },
    { "month": "May 5", "desktop": 113 },
    { "month": "May 6", "desktop": 21 },
    { "month": "May 7", "desktop": 16 },
    { "month": "May 8", "desktop": 14 },
    { "month": "Jul 1", "desktop": 14 },
    { "month": "Jul 10", "desktop": 44 },
    { "month": "Jul 29", "desktop": 13 },
    { "month": "Aug 8", "desktop": 21 },
    { "month": "Jun 28", "desktop": 144 },
    { "month": "Oct 1", "desktop": 110 }
  ]

const chartConfig = {
  desktop: {
    label: "Downloads",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function Stats() {
  return (
    <Box heading="NPM" subheading="Downloads">
      <div className="flex justify-center items-center mt-5">
        <div className="h-[100%] w-[100%]">
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData} height={300}>
              <CartesianGrid vertical={false} />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="desktop" fill="black" radius={3} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
    </Box>
  );
}
