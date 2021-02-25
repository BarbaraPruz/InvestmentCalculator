import React from 'react'

import {CalculatorStore} from '../context/calculatorStore';

export const SummaryTable = (): JSX.Element|null => {
    const {state}= React.useContext(CalculatorStore)
    const { numberYears, yearSavings, initialInvestment}= state
    const years: number[] = [];
    let i:number =0;
    while(i<numberYears) years[i++]=i;

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
                    {years.map( (y,index) => <tr key={`year${y}`}>
                        <td>{y}</td>
                        <td>{yearSavings[index].interest.toFixed(2)}</td>
                        <td>{yearSavings[index].deposits}</td>
                        <td>{yearSavings[index].amount.toFixed(2)}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default SummaryTable;