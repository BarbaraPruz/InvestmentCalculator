import React from 'react';
import {CalculatorContext} from '../context/calculatorContext';

export const ContextDbg = (): JSX.Element => {
    const {investmentClasses}= React.useContext(CalculatorContext);

  return (
    <div>
       {investmentClasses.map (cls => <p key={cls.id}>Investment Class Name:{cls.name} InitInv:{cls.initialInvestment}</p>)} 
    </div>
    )
}

export default ContextDbg;
