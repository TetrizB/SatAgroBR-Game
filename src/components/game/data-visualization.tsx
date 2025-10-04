"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

const chartData = [
  { month: "Jan", rainfall: 18, moisture: 30 },
  { month: "Feb", rainfall: 22, moisture: 28 },
  { month: "Mar", rainfall: 45, moisture: 40 },
  { month: "Apr", rainfall: 80, moisture: 65 },
  { month: "May", rainfall: 50, moisture: 70 },
  { month: "Jun", rainfall: 20, moisture: 50 },
]

const chartConfig = {
  rainfall: {
    label: "Rainfall (mm)",
    color: "hsl(var(--secondary))",
  },
  moisture: {
    label: "Soil Moisture (%)",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export function DataVisualization() {
  return (
    <Card className="bg-card/60 backdrop-blur-md">
      <CardHeader>
        <CardTitle className="font-headline">Live Field Data</CardTitle>
        <CardDescription>Based on satellite readings</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} stroke="hsl(var(--muted-foreground), 0.2)" />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              stroke="hsl(var(--muted-foreground))"
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Bar dataKey="rainfall" fill="var(--color-rainfall)" radius={4} />
            <Bar dataKey="moisture" fill="var(--color-moisture)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
