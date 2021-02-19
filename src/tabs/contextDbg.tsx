import React from 'react';
import {CalculatorStore} from '../context/calculatorStore';

export const ContextDbg = (): JSX.Element => {
  const {state}= React.useContext(CalculatorStore);
  const {investmentClasses}= state;
  return (
    <div>
      {investmentClasses.map (cls => <div key={cls.id}>
        <h3>Investment Class Name:{cls.name}</h3> 
        <p>
          Initial Investment:{cls.initialInvestment}<br/>
          Total Investment:{cls.totalInvestment}
        </p>       
       </div>
      )} 
    </div>
    )
}

export default ContextDbg;
