import { findAllInRenderedTree } from 'react-dom/test-utils';
import {newInvestmentClass, newInvestmentCategory} from './investmentClass'

export interface IState {
  startYear: number,
  numberYears: number,
  investmentClasses: InvestmentClass[], 
} 

interface ICalculatorSetStartYear {
    type: 'CalculatorSetStartYear',
    year: number
}

interface ICalculatorSetNumberYears {
    type: 'CalculatorSetNumberYears',
    span: number
}

interface ICalculatorAddInvestmentClass {
    type: 'CalculatorAddInvestmentClass'
    invCls: InvestmentClass
}

interface ICalculatorDeleteInvestmentClass {
    type: 'CalculatorDeleteInvestmentClass'
    id: string
}

interface IInvestmentClassChange {
    type: 'InvestmentClassChange'
    id: string,
    field: string,
    value: string
}

interface IInvestmentClassNewCategory {
  type: 'InvestmentClassAddCategory'
  id: string,
  cat: InvestmentCategory
}
interface IInvestmentCategoryChange {
  type: 'InvestmentCategoryChange'
  id: string,
  clsId: string,
  field: string,
  value: string
}
export type Actions = 
    ICalculatorSetStartYear | ICalculatorSetNumberYears | ICalculatorAddInvestmentClass | ICalculatorDeleteInvestmentClass 
    | IInvestmentClassChange | IInvestmentClassNewCategory
    | IInvestmentCategoryChange;

export const initialState = {
    startYear: 2020,
    numberYears: 5,
    investmentClasses: [newInvestmentClass()],
}

export const reducer = (state: IState, action: Actions) => {
    let newClasses: InvestmentClass[] 
    let cls;
    let cat;
    switch(action.type){
      case 'CalculatorSetStartYear':
        return {...state,startYear:action.year}
      case 'CalculatorSetNumberYears':
        return {...state,numberYears:action.span}
      case 'CalculatorAddInvestmentClass':
        newClasses = [...state.investmentClasses]
        if (!newClasses.find(c=>c.id===action.invCls.id))
          newClasses.push(action.invCls)
        return {...state,investmentClasses:newClasses}
      case 'CalculatorDeleteInvestmentClass':
        newClasses = state.investmentClasses.filter( (c:InvestmentClass) => c.id !== action.id)
        return {...state,investmentClasses:newClasses}

      case 'InvestmentClassChange':
        newClasses = [...state.investmentClasses]
        cls = newClasses.find( cls => cls.id === action.id)
        if (cls) {
          if (action.field==='initialInvestment') {
            cls.initialInvestment=Number(action.value)
            cls.totalInvestment=Number(action.value)  // To Do: calc real total
          }
          else if (action.field==='name')
            cls.name = action.value;          
        }
        return {...state,investmentClasses:newClasses}

      case 'InvestmentClassAddCategory':
        newClasses = [...state.investmentClasses]
        cls = newClasses.find( cls => cls.id === action.id)
        if (cls) {
          if (!cls.categories.find(c=>c.id===action.cat.id))
            cls.categories.push(action.cat)
        }
        return {...state,investmentClasses:newClasses}

      case 'InvestmentCategoryChange':
        newClasses = [...state.investmentClasses]
        cls = newClasses.find( c => c.id === action.clsId)
        if (cls) {
          cat = cls.categories.find(c => c.id === action.id)
          if (cat) {
            if (action.field==='name') {
              cat.name = action.value;         
            }
            else if (action.field==='weightage') {
              cat.weightage = Number(action.value); 
              cat.amount = cat.weightage/100 * cls.totalInvestment       
            }
          }
        }
        return {...state,investmentClasses:newClasses}
    };

}