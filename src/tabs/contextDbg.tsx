import React from 'react';
import {CalculatorStore} from '../context/calculatorStore';

export const ContextDbg = (): JSX.Element => {
  const {state}= React.useContext(CalculatorStore);
  const {startYear, numberYears, investmentClasses}= state;
  return (
    <div>
      <h3>Investment Calculator starting in {startYear} for {numberYears}</h3>
      {investmentClasses.map (cls => <div key={cls.id}>
        <h3>Investment Class Name:{cls.name}</h3> 
        <p>
          Initial Investment:{cls.initialInvestment}<br/>
          Total Investment:{cls.totalInvestment}
        </p>
        {cls.categories.map( cat => <p key={cat.id}>{cat.name}({cat.id}) - {cat.weightage}%, ${cat.amount}</p>) }     
       </div>
      )} 
    </div>
    )
}

export default ContextDbg;
