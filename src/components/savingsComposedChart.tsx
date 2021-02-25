import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart
} from "recharts";
import { Area, Bar} from "recharts";

interface SavingsComposedChartProps {
  data: { year: string, principal: number, total:number, interest:number,totalInterest:number }[]
}

export const SavingsComposedChart: React.FC<SavingsComposedChartProps> = (props): JSX.Element => {

  return (
    <ResponsiveContainer width="100%" height="100%">
    <ComposedChart
      data={props.data}
      margin={{
        top: 5,
        right: 30,
        bottom: 5,
        left: 5,
      }}
    >
      <CartesianGrid stroke="#8c8c8c" strokeDasharray="3 3" />
      <XAxis dataKey="year" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="total" fill="#82ca9d" stroke="#82ca9d" />
      <Bar dataKey="principal" barSize={20} fill="#8884d8" />
    </ComposedChart>
  </ResponsiveContainer>
  );
};

export default SavingsComposedChart;
