import React from "react";

import SavingsLineChart from './savingsLineChart'
import SavingsBarChart from './savingsBarChart'
import SavingsComposedChart from './savingsComposedChart'
import { CalculatorStore } from "../context/calculatorStore";

export const ChartsContainer = (): JSX.Element|null => {
  const { state } = React.useContext(CalculatorStore);
  const { yearSavings, initialInvestment } = state;

  const getPrincipal = (y: number): number => {
    let acc = 0;
    let i = 0;
    for (i = 0; i <= y; ++i) acc += yearSavings[i].deposits;
    return acc;
  };
  const getTotalInterest = (y: number): number => {
    let acc = 0;
    let i = 0;
    for (i = 0; i <= y; ++i) acc += yearSavings[i].interest;
    return acc;
  };

  if (initialInvestment===0) return null;
  let data = yearSavings.map((y, i) => {
    return {
      year: `${i + 1}`,
      principal: getPrincipal(i),
      total: y.amount,
      interest: y.interest,
      totalInterest: getTotalInterest(i),
    };
  });

  return (
    <div className="card" style={{height:"370px"}}>
      <div className="d-flex w-100" style={{height:"300px"}}>
        <div style={{width:"33%"}}>
        <h2>Total Savings</h2>
        <SavingsLineChart data={data} />          
        </div>
        <div style={{width:"33%"}}>
          <h2>Principal and Interest</h2>
          <SavingsBarChart data={data}/>          
        </div>
        <div style={{width:"33%"}}>
          <h2>Principal vs Total</h2>
          <SavingsComposedChart data={data}/>          
        </div>
      </div>
    </div>
  );
};

export default ChartsContainer;
