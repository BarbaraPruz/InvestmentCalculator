import React from 'react'

import TextInputField from './textInputField'
import MoneyInputField from './moneyInputField'

interface InvestmentCategoryContainerProps {
    cat: InvestmentCategory,
}

export const InvestmentCategoryContainer: React.FC<InvestmentCategoryContainerProps> = (props): JSX.Element => {

    return (
        <div className="card">
            <TextInputField 
              initialValue={props.cat.name} 
              onChange={(value:string)=>{console.log('new categoryname',value)}}
            />
            <div className="investmentCategory-details">
             <label>Weightage %:</label>
             <div>15</div>
            <label>Invested Amount</label>
            <div>$xxx</div>
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