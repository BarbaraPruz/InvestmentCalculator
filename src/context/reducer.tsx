import {InjectionFrequency} from '../global.d'
export interface IState {
  numberYears: number,
  initialInvestment: number,
  rate: number,
  injectionAmount: number,
  injectionFrequency: InjectionFrequency 
} 

interface ISetNumberYears {
    type: 'SetNumberYears',
    years: number
}

interface ISetInitialInvestment{
    type: 'SetInitialInvestment',
    amount: number
}
 
interface ISetRate {
    type: 'SetRate',
    rate: number
}

interface ISetInjectionAmount {
    type: 'SetInjectionAmount',
    amount: number
}

interface ISetInjectionFrequency {
  type: 'SetInjectionFrequency'
  frequency: InjectionFrequency
} 

export type Actions = 
    ISetNumberYears
      | ISetInitialInvestment 
       | ISetRate 
   | ISetInjectionAmount 
     | ISetInjectionFrequency 
; 
export const initialState = {
    numberYears: 5,
    initialInvestment: 1000,
    rate: 1.75,
   injectionAmount: 0,
      injectionFrequency: InjectionFrequency.OneTime
}

export const reducer = (state: IState, action: Actions) => {

    switch(action.type){
      case 'SetNumberYears':
        return {...state,numberYears:action.years}
      case 'SetInitialInvestment':
        return {...state,initialInvestment:action.amount}
        case 'SetRate':
        return {...state,rate:action.rate}
      case 'SetInjectionAmount':
        return {...state,injectionAmount:action.amount}
      case 'SetInjectionFrequency':
        return {...state,injectionFrequency:action.frequency}  
    };

}