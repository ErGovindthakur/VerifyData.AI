"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

import type { DocumentTypeStat } from "../types/analytics.types";
import { CardDescription, CardTitle } from "@/components/ui/card";

type Props = Readonly<{
  data: DocumentTypeStat[];
}>;

const COLORS = ["#2563eb", "#16a34a", "#dc2626", "#ca8a04", "#9333ea", "#0891b2"];

export function DocumentTypeChart({ data }: Props) {
  return (
    <div className="rounded-xl border p-6">
      <CardTitle>Document Types</CardTitle>

      <CardDescription>Distribution of processed documents</CardDescription>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie data={data} dataKey="count" nameKey="documentType" outerRadius={110} label>
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
