import React from 'react'

import {CalculatorStore} from '../context/calculatorStore';

export const TableTab = (): JSX.Element => {
    const {state}= React.useContext(CalculatorStore)
    const { numberYears, rate, yearSavings}= state
    const years: number[] = [];
    let i=0;
    while(i<numberYears) years[i++]=i;

    return (
        <div>
            <h2>Table Tab</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Rate</th>
                        <th>Interest</th>
                        <th>Deposits</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {years.map( (y,index) => <tr key={`year${y}`}>
                        <td>{y}</td>
                        <td>{rate}</td>
                        <td>{yearSavings[index].interest.toFixed(2)}</td>
                        <td>{yearSavings[index].deposits}</td>
                        <td>{yearSavings[index].amount.toFixed(2)}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default TableTab