import React from "react";

import { CalculatorStore } from "../context/calculatorStore";
import { formatMoney } from "../utils";

export const SummaryTable = (): JSX.Element | null => {
  const { state } = React.useContext(CalculatorStore);
  const { numberYears, yearSavings, initialInvestment } = state;
  const years: number[] = [...Array(numberYears+1).keys()].slice(1)

  if (initialInvestment === 0) return null;
  return (
    <div className="col-md-6">
      <div className="card">
        <h2>Yearly Summary</h2>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Year</th>
              <th>Interest</th>
              <th>Deposits</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {years.map((y, index) => (
              <tr key={`year${y}`}>
                <td>{y}</td>
                <td>{formatMoney(yearSavings[index].interest)}</td>
                <td>
                  {yearSavings[index].deposits > 0
                    ? formatMoney(yearSavings[index].deposits)
                    : ""}
                </td>
                <td>{formatMoney(yearSavings[index].amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SummaryTable;
