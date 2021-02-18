import React from 'react';
import {CalculatorContext} from '../context/calculatorContext';
import InvestmentClassContainer from '../components/investmentClassContainer';
import TimeSpan from '../components/timespan'


export const InvestmentsTab = (): JSX.Element => {
    const {investmentClasses, addInvestmentClass, deleteInvestmentClass, changeInvestmentClass}= React.useContext(CalculatorContext);
/*
To determine:
    when initial investment changes, total investment and other things change
    these rules can be here or they can be in context....
*/

    return (
    <>
        <TimeSpan />
        <div className="card">
            <div className="d-flex justify-content-between">
                <h2>Investments</h2>
                <button className="btn" onClick={()=>addInvestmentClass()}>
                    <i className="fa fa-plus" />
                    Add Investment Class
                </button>                
            </div>

            <div className="d-flex flex-wrap">
                {investmentClasses.map ( (c:InvestmentClass,i) =>{
                    return <InvestmentClassContainer 
                        key={`invclass-${i}`} 
                        invcls={c} 
                        onDelete={deleteInvestmentClass}
                        onChange={changeInvestmentClass}
                    />
                } )}                 
            </div>

        </div>
    </>
    )
}

export default InvestmentsTab;
