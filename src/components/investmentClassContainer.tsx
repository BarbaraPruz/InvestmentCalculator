import React from 'react'
import {CalculatorStore} from '../context/calculatorStore';
import TextInputField from './textInputField'
import MoneyInputField from './moneyInputField'
import InvestmentCategoryContainer from './investmentCategoryContainer'
import { formatMoney} from '../utils'
import { newInvestmentCategory } from '../context/investmentClass';

interface InvestmentClassContainerProps {
    invcls: InvestmentClass,
}

export const InvestmentClassContainer: React.FC<InvestmentClassContainerProps> = (props): JSX.Element => {
  const {state, dispatch}= React.useContext(CalculatorStore);
  const {invcls} = props;

  const handleChange = (field:string, value:string) => {
    dispatch({type:'InvestmentClassChange',id:invcls.id,field,value})
  }
    return (
        <div className="investmentClass-card">
          <div className="d-flex justify-content-between m-2">
            <div></div>
            <TextInputField 
              initialValue={invcls.name} 
              onChange={(value:string)=>handleChange('name',value)}
            />
            <button onClick={()=>dispatch({type:'CalculatorDeleteInvestmentClass',id:invcls.id})}>
              <i className="fa fa-times"></i>
            </button>             
          </div>

          <div className="investmentClass-summary">
             <label className="inline-label">Initial Investment:</label>
            <MoneyInputField 
              initialValue="0"
               onChange={(value:string)=>handleChange('initialInvestment', value)}
            /> 
            <label>Total Investment:</label>
            <div>{formatMoney(invcls.totalInvestment)}</div>
            <label>At Risk</label>
            <div>$500</div>
          </div>

          {props.invcls.categories.map( cat => <InvestmentCategoryContainer 
            key={cat.id} cat={cat} clsId={invcls.id}
           
          />)}
          <button className="btn" onClick={()=>{
            console.log('add cat');
            dispatch({type:'InvestmentClassAddCategory',id:invcls.id,cat:newInvestmentCategory()})
          }}>
            <i className="fa fa-plus" />
            Add Investment Category
          </button>                
        </div>
    )
}

export default InvestmentClassContainer