"use client";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Bar,
  ComposedChart,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  Area,
} from "recharts";

const chartConfig = {
  // label -> legend, tooltip에 적용되는 이름
  pageViews: {
    label: "Page views",
    // color: "var(--chart-1)",
  },
  clicks: {
    label: "Clicks",
    // color: "var(--chart-2)",
  },
  revenue: {
    label: "Revenue",
    // color: "var(--chart-3)",
  },
  
} satisfies ChartConfig;

const chartData = [
  { month: "January", pageViews: 30, clicks: 5, revenue: 10 },
  { month: "February", pageViews: 45, clicks: 10, revenue: 15 },
  { month: "March", pageViews: 70, clicks: 20, revenue: 25 },
  { month: "April", pageViews: 65, clicks: 15, revenue: 20 },
  { month: "May", pageViews: 60, clicks: 10, revenue: 35 },
  { month: "June", pageViews: 40, clicks: 5, revenue: 30 },
  { month: "July", pageViews: 45, clicks: 5, revenue: 20 },
  { month: "August", pageViews: 40, clicks: 10, revenue: 40 },
  { month: "September", pageViews: 55, clicks: 25, revenue: 35 },
  { month: "October", pageViews: 75, clicks: 15, revenue: 50 },
  { month: "November", pageViews: 65, clicks: 30, revenue: 45 },
  { month: "December", pageViews: 70, clicks: 35, revenue: 55 },
];

const AppLineBarChart = () => {
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Total Revenue</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <ComposedChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />

          <Bar
            //chartData.pageViews 참조
            dataKey="pageViews"
            fill="var(--chart-4)"
            radius={4}
            barSize={12}
          />

          <Line
            //chartData.clicks 참조
            dataKey="clicks"
            type="linear"
            stroke="var(--chart-2)"
            strokeWidth={2}
            dot={true}
          />

          {/* <Area
            type="linear"
            key="revenue-area" // 유니크 키 지정
            dataKey="revenue"
            stroke="var(--chart-3)"
            fill="var(--chart-3)"
            fillOpacity={0.2} // 투명도 조절
            strokeWidth={0} // 테두리 선 감추기
            legendType="none" // 레전드에 표시 안 함
          /> */}

          <Line
            //chartData.revenue 참조
            dataKey="revenue"
            type="linear"
            stroke="var(--chart-3)"
            strokeWidth={2}
            dot={true}
            strokeDasharray="4 2" // ← 이 부분이 점선 설정 4px 선, 2px 공백 반복
          />
        </ComposedChart>
      </ChartContainer>
    </div>
  );
};

export default AppLineBarChart;
