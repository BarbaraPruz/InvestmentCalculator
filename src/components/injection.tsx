import React from 'react'

import {CalculatorContext} from '../context/calculatorContext';

export const Injection = (): JSX.Element => {
    const {startYear, numberYears}= React.useContext(CalculatorContext)
    const years = []
    for (let i=1; i<numberYears; ++i)
        years.push(startYear+i)
    return (
        <div>
            <h2>Injection</h2>
            <table>
                <tbody>
                    {years.map ( (y)=><tr key={y}><td>{y}</td></tr>)}                      
                </tbody>
            </table>
        </div>
    )
}

export default Injection