"use client";

import * as React from "react";
import { Label, Pie, PieChart, LegendProps, TooltipProps } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Define the data types
type ChartDataItem = {
  browser: string;
  visitors: number;
  fill: string;
};

const chartData: ChartDataItem[] = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

const chartConfig: ChartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
};

// Custom Legend Component with TypeScript
const CustomLegend: React.FC<LegendProps> = ({ payload }) => (
  <ul className="flex flex-col gap-2">
    {payload?.map((entry, index) => (
      <li key={`item-${index}`} className="flex items-center gap-2">
        <span
          style={{ backgroundColor: entry.color }}
          className="inline-block w-3 h-3 rounded-full"
        ></span>
        <span className="text-sm font-medium">
          {/* @ts-ignore */}
          {`${entry.value} (${entry.payload.visitors})`}
        </span>
      </li>
    ))}
  </ul>
);

export function DashboardPieChart() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <ChartContainer config={chartConfig} className="h-[240px]">
      <PieChart
        className="m-0 p-0  "
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        width={320} // Ensure the width is set to fit your layout
        height={240} // Ensure the height is set to fit your layout
       
      >
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="visitors"
          nameKey="browser"
          innerRadius={60}
          strokeWidth={5}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-left" // Ensure text aligns to left
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-3xl font-bold"
                    >
                      {totalVisitors.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      Total
                    </tspan>
                  </text>
                );
              }
              return null;
            }}
          />
        </Pie>

        <ChartLegend
          layout="vertical"
          verticalAlign="middle"
          align="right" // Align legend to the left
          content={<CustomLegend />}
        />
      </PieChart>
    </ChartContainer>

  );
}
