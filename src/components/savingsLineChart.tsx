import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

interface SavingsLineChartProps {
  data: { year: string, principal: number, total:number, interest:number,totalInterest:number }[]
}

export const SavingsLineChart: React.FC<SavingsLineChartProps> = (props): JSX.Element => {

  return (
         
    <ResponsiveContainer width="100%" height="100%">

         <LineChart
            data={props.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip formatter={(value: string) => Number(value).toFixed(2)} />
            <Legend />
            <Line
              type="monotone"
              dataKey="principal"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
          </LineChart>

    </ResponsiveContainer>
 
  );
};

export default SavingsLineChart;
