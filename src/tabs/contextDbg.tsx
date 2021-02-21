import React from 'react';
import {CalculatorStore} from '../context/calculatorStore'; 

export const ContextDbg = (): JSX.Element => {
  const {state}= React.useContext(CalculatorStore);
  const {numberYears , initialInvestment, rate, injectionAmount, injectionFrequency }= state;
  return (
    <ul>
       <li>numberYears: {numberYears}</li>
      <li>initialInvestment: {initialInvestment}</li>
       <li>rate: {rate}</li>
      <li>injectionAmount: {injectionAmount}</li>
     <li>injectionFrequency: {injectionFrequency}</li>   
    </ul>
    )
}

export default ContextDbg;
