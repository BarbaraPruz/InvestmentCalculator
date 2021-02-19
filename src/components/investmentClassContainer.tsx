import React from 'react'
//import {CalculatorStore} from '../context/calculatorStore';
import TextInputField from './textInputField'
import MoneyInputField from './moneyInputField'
import InvestmentCategoryContainer from './investmentCategoryContainer'
import { formatMoney} from '../utils'

interface InvestmentClassContainerProps {
    invcls: InvestmentClass,
    onDelete: (id: string)=> void,
    onChange: (cls:InvestmentClass, field:string, value:string) => void
}

export const InvestmentClassContainer: React.FC<InvestmentClassContainerProps> = (props): JSX.Element => {

  const {invcls, onDelete, onChange} = props;

    return (
        <div className="investmentClass-card">
          <div className="d-flex justify-content-between m-2">
            <div></div>
            <TextInputField 
              initialValue={invcls.name} 
              onChange={(value:string)=>onChange(invcls, 'name', value)}
            />               
            <button onClick={()=>onDelete(invcls.id)}>
              <i className="fa fa-times"></i>
            </button>             
          </div>

          <div className="investmentClass-summary">
             <label className="inline-label">Initial Investment:</label>
            <MoneyInputField 
              initialValue="0"
               onChange={(value:string)=>onChange(invcls, 'initialInvestment', value)}
            /> 
            <label>Total Investment:</label>
            <div>{formatMoney(invcls.totalInvestment)}</div>
            <label>At Risk</label>
            <div>$500</div>
          </div>

          {props.invcls.categories.map( cat => <InvestmentCategoryContainer key={cat.id} cat={cat} />)}
          <button className="btn" onClick={()=>console.log('dd a new category!')}>
            <i className="fa fa-plus" />
            Add Investment Category
          </button>                
        </div>
    )
}

export default InvestmentClassContainer