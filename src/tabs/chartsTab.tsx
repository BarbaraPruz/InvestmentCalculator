import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import { BarChart, Bar, Cell } from 'recharts';

import {CalculatorStore} from '../context/calculatorStore'; 

export const ChartsTab = (): JSX.Element => {
    const {state}= React.useContext(CalculatorStore)
    const {yearSavings}= state

    const getPrincipal = (y:number):number => {
        let acc = 0;
        let i = 0;
        for (i=0; i<=y; ++i)
            acc += yearSavings[i].deposits;
        return acc;
    }
    const getTotalInterest = (y:number):number => {
        let acc = 0;
        let i = 0;
        for (i=0; i<=y; ++i)
            acc += yearSavings[i].interest;
        return acc;
    }
    let data = yearSavings.map ((y,i) => {
        return {
            year:`${i+1}`,
            principal: getPrincipal(i), 
            total:y.amount, 
            interest: y.interest,
            totalInterest: getTotalInterest(i)
        }
    })
    return (
        <div>
            <h2>Charts Tab</h2>
            <LineChart width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip 
                    formatter={(value:string) => Number(value).toFixed(2)}/>
                <Legend />
                <Line
                  type="monotone"
                  dataKey="principal"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
              </LineChart>

      {/* <ResponsiveContainer width="100%" height="100%"> */}
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip 
            formatter={(value:string) => Number(value).toFixed(2)}
          />
          <Legend />
          <Bar dataKey="principal" stackId="a" fill="#8884d8" />
          <Bar dataKey="totalInterest" stackId="a" fill="#82ca9d" />
        </BarChart>
      {/* </ResponsiveContainer> */}
        </div>
    )
}

export default ChartsTab