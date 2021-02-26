import React from "react";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { formatMoney } from "../utils";

interface SavingsBarChartProps {
  data: {
    year: string;
    principal: number;
    total: number;
    interest: number;
    totalInterest: number;
  }[];
}

export const SavingsBarChart: React.FC<SavingsBarChartProps> = (
  props
): JSX.Element => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="#8c8c8c" strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip formatter={(value: string) => formatMoney(Number(value))} />
        <Legend />
        <Bar dataKey="principal" stackId="a" fill="#8884d8" />
        <Bar dataKey="totalInterest" stackId="a" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SavingsBarChart;
