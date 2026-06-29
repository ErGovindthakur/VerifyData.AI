"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import type { UploadTrend } from "../types/analytics.types";

type Props = Readonly<{
  data: UploadTrend[];
}>;

export function UploadTrendChart({ data }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Trend</CardTitle>

        <CardDescription>Daily uploads over time</CardDescription>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          {/* Chart */}
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />

            <YAxis allowDecimals={false} />

            <Tooltip />

            <Line type="monotone" dataKey="uploads" stroke="#2563eb" strokeWidth={3} />
          </LineChart>
          ;
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
