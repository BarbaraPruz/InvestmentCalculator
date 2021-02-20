import React from 'react'
import {CalculatorStore} from '../context/calculatorStore';
import TextInputField from './textInputField'
import NumberInputField from './numberInputField'
import MoneyInputField from './moneyInputField'
import { formatMoney} from '../utils'
interface InvestmentCategoryContainerProps {
    cat: InvestmentCategory,
    clsId: string
}

export const InvestmentCategoryContainer: React.FC<InvestmentCategoryContainerProps> = (props): JSX.Element => {
  const {state, dispatch}= React.useContext(CalculatorStore);

  const handleChange = (field:string, value:string) => {
    dispatch({
      type:'InvestmentCategoryChange',
      id: props.cat.id,
      clsId: props.clsId,
      field,
      value 
  })}

    return (
        <div className="card">
            <TextInputField 
              initialValue={props.cat.name} 
              onChange={(value:string)=>handleChange('name',value)}
            />
            <div className="investmentCategory-details">
              <label className="inline-label">Weightage %:</label>
              <NumberInputField 
                max="100" min="0"
                initialValue="0"
                onChange={(value:string)=>handleChange('weightage',value)}
              /> 
            <label>Invested Amount</label>
            <div>{formatMoney(props.cat.amount)}</div>
            <label>% Annual Return</label>
            <div>n.nn</div>
            <label>Risk Level</label>
            <div>(risk)</div>
            <label>Compoundend Amount</label>
            <div>$11111</div>
            <label>At Risk</label>
            <div>(risk)</div>
          </div>
        </div>
    )
}

export default InvestmentCategoryContainer