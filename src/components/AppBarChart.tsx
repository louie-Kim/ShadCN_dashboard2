"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useState } from "react";
import { format } from "date-fns";

const chartData = [
  // dataKey: YAxis: month, XAxis: desktop, mobile 숫자
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 120 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    // color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    // color: "var(--chart-3)",
  },
} satisfies ChartConfig;

const AppBarChart = () => {
  //   const koreaTime = new Date().toLocaleString("ko-KR", {
  //   timeZone: "Asia/Seoul",
  //   year: "numeric",
  //   month: "2-digit",
  //   day: "2-digit",
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   // second: "2-digit",
  // });

  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="">
      {" "}
      <Card>
        <CardHeader>
          <CardTitle>Bar Chart - Horizontal</CardTitle>
          <CardDescription>
            {/* Thursday, July 10th, 2025 1:42 PM 형태 */}
            {date && format(date, "PPPP p")} 
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"
              margin={{
                left: -20,
              }}
            >
              {/* hide 옵션가능 */}
              <XAxis type="number" />
              <YAxis
                dataKey="month"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                // tickFormatter={(value) => value.slice(0, 3)}
                tickFormatter={(value) => {
                  // console.log("YAxis value:", value);
                  return typeof value === "string" ? value.slice(0, 3) : "";
                }}
              />
              {/* 마우스 오버 -> 데이터 표시 */}
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              {/* Legend는 기본적으로 Bar의 dataKey를 기준으로 payload를 생성 */}
              <ChartLegend
                content={(props) => {
                  // console.log("Legend Props:", props); // props payload 확인용
                  return <ChartLegendContent {...(props as any)} />;
                }}
              />
              {/* 여기서 bar색 변경 가능 */}
              {/* dataKey-> chartData : 참조 */}
              <Bar dataKey="desktop" fill="var(--chart-2)" radius={4} />
              <Bar dataKey="mobile" fill="var(--chart-1)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
        {/* <CardFooter className="flex-col items-center gap-2 text-sm">
          <div className="flex gap-2 leading-none font-medium">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="text-muted-foreground leading-none">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default AppBarChart;
