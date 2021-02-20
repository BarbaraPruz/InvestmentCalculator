import React from 'react';
import {CalculatorStore} from '../context/calculatorStore';
import InvestmentClassContainer from '../components/investmentClassContainer';
import TimeSpan from '../components/timespan'
import {newInvestmentClass} from '../context/investmentClass'

export const InvestmentsTab = (): JSX.Element => {
    const {state, dispatch}= React.useContext(CalculatorStore);
    const {investmentClasses}= state;

    return (
    <>
        <TimeSpan />
        <div className="card">
            <div className="d-flex justify-content-between">
                <h2>Investments</h2>
                <button className="btn" onClick={()=>dispatch({type:'CalculatorAddInvestmentClass',invCls:newInvestmentClass()})}>
                    <i className="fa fa-plus" />
                    Add Investment Class
                </button>                
            </div>

            <div className="d-flex flex-wrap">
                {investmentClasses.map ( (c:InvestmentClass,i) =>{
                    return <InvestmentClassContainer 
                        key={`invclass-${i}`} 
                        invcls={c}         
                    />
                } )}                 
            </div>

        </div>
    </>
    )
}

export default InvestmentsTab;
