import {newInvestmentClass} from './investmentClass'

export interface IState {
  startYear: number,
  numberYears: number,
  investmentClasses: InvestmentClass[], 
} 

interface ISetStartYear {
    type: 'CalculatorSetStartYear',
    year: number
}

interface ISetNumberYears {
    type: 'CalculatorSetNumberYears',
    span: number
}

interface IAddInvestmentClass {
    type: 'CalculatorAddInvestmentClass'
}

interface IDeleteInvestmentClass {
    type: 'CalculatorDeleteInvestmentClass'
    id: string
}

interface IChangeInvestmentClass {
    type: 'InvestmentClassChange'
    id: string,
    field: string,
    value: string
}

export type Actions = 
    ISetStartYear | ISetNumberYears | IAddInvestmentClass | IDeleteInvestmentClass 
    | IChangeInvestmentClass;

export const initialState = {
    startYear: 2020,
    numberYears: 5,
    investmentClasses: [newInvestmentClass()],
}

export const reducer = (state: IState, action: Actions) => {
    let newClasses: InvestmentClass[] 
    switch(action.type){
      case 'CalculatorSetStartYear':
        return {...state,startYear:action.year}
      case 'CalculatorSetNumberYears':
        return {...state,numberYears:action.span}
      case 'CalculatorAddInvestmentClass':
        return {...state,investmentClasses:[...state.investmentClasses,newInvestmentClass()]}
      case 'CalculatorDeleteInvestmentClass':
        newClasses = state.investmentClasses.filter( (c:InvestmentClass) => c.id !== action.id)
        return {...state,investmentClasses:newClasses}

      case 'InvestmentClassChange':
        newClasses = [...state.investmentClasses]
        let cls = newClasses.find( cls => cls.id === action.id)
        if (cls) {
          if (action.field==='initialInvestment') {
            cls.initialInvestment=Number(action.value)
            cls.totalInvestment=Number(action.value)  // To Do: calc real total
          }
          else if (action.field==='name')
            cls.name = action.value;          
        }

        return {...state,investmentClasses:newClasses}
    };

}