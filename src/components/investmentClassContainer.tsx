import React from 'react'
import {CalculatorContext} from '../context/calculatorContext';
import TextInputField from './textInputField'
import MoneyInputField from './moneyInputField'
import InvestmentCategoryContainer from './investmentCategoryContainer'

interface InvestmentClassContainerProps {
    invcls: InvestmentClass,
    onDelete: (id: string)=> void,
    onChange: (cls: InvestmentClass) => void
}

export const InvestmentClassContainer: React.FC<InvestmentClassContainerProps> = (props): JSX.Element => {
  const {addInvestmentCategory}= React.useContext(CalculatorContext);
  const {invcls, onDelete, onChange} = props;

    return (
        <div className="investmentClass-card">
          <div className="d-flex justify-content-between m-2">
            <div></div>
            <TextInputField 
              initialValue={invcls.name} 
              onChange={(value:string)=>onChange({...invcls,name:value})}
            />               
            <button onClick={()=>onDelete(invcls.id)}>
              <i className="fa fa-times"></i>
            </button>             
          </div>

          <div className="investmentClass-summary">
             <label className="inline-label">Initial Investment:</label>
            <MoneyInputField 
              initialValue="0"
               onChange={(value:number)=>onChange({...invcls,initialInvestment:value})}
            /> 
            <label>Total Investment:</label>
            <div>$1000</div>
            <label>At Risk</label>
            <div>$500</div>
          </div>

          {props.invcls.categories.map( cat => <InvestmentCategoryContainer key={cat.id} cat={cat} />)}
          <button className="btn" onClick={()=>addInvestmentCategory(props.invcls)}>
            <i className="fa fa-plus" />
            Add Investment Category
          </button>                
        </div>
    )
}

export default InvestmentClassContainer