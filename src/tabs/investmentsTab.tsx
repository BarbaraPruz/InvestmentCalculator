import React from 'react';
import {CalculatorStore} from '../context/calculatorStore';
import InvestmentClassContainer from '../components/investmentClassContainer';
import TimeSpan from '../components/timespan'


export const InvestmentsTab = (): JSX.Element => {
    const {state, dispatch}= React.useContext(CalculatorStore);
    const {investmentClasses}= state;
    const onChange = (inv:InvestmentClass, field:string, value: string):void => {
        switch (field) {
            case 'name':
                dispatch({type:'InvestmentClassChange',id:inv.id,field,value})
                break;
            case 'initialInvestment':
                dispatch({
                    type:'InvestmentClassChange',
                    id:inv.id,field,value
                })
                break;
            default:
                break;
        }
    }
/* To Do Next:
    context dbg: show span and investment class contents
    InvestmentsTab handles calculator level actions
    InvestmentClass handles InvestmentClass changes - name investment categories
*/
    return (
    <>
        <TimeSpan />
        <div className="card">
            <div className="d-flex justify-content-between">
                <h2>Investments</h2>
                <button className="btn" onClick={()=>dispatch({type:'CalculatorAddInvestmentClass'})}>
                    <i className="fa fa-plus" />
                    Add Investment Class
                </button>                
            </div>

            <div className="d-flex flex-wrap">
                {investmentClasses.map ( (c:InvestmentClass,i) =>{
                    return <InvestmentClassContainer 
                        key={`invclass-${i}`} 
                        invcls={c} 
                        onDelete={()=>dispatch({type:'CalculatorDeleteInvestmentClass',id:c.id})}
                        onChange={onChange}
                    />
                } )}                 
            </div>

        </div>
    </>
    )
}

export default InvestmentsTab;
