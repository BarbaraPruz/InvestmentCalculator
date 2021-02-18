import * as React from "react";
import InvestmentClassContainer from "../components/investmentClassContainer";
import { newInvestmentClass, newInvestmentCategory } from './investmentClass';

const defaultParams = {
    startYear: 2020,
    numberYears: 5,
    investmentClasses: [newInvestmentClass()],
    setYear: (n:number)=>{},
    setSpan: (n:number)=>{},
    addInvestmentClass: ()=>{},
    deleteInvestmentClass: (id:string)=>{},
    changeInvestmentClass: (invcls:InvestmentClass)=>{},
    addInvestmentCategory: (invcls:InvestmentClass)=>{}
}
export const CalculatorContext = React.createContext(defaultParams);

type Props = {
    children: React.ReactNode
}

export const CalculatorProvider = ({children}: Props) => {
    // temp id generator
    let lastId='a';
    const [startYear, setStartYear] = React.useState(defaultParams.startYear)
    const [numberYears, setNumberYears] = React.useState(defaultParams.numberYears)
    const [investmentClasses, setInvestmentClasses] = React.useState<InvestmentClass[]>(defaultParams.investmentClasses)
    const setYear = (year:number)=> setStartYear(year)
    const setSpan = (span:number)=> setNumberYears(span)
    const addInvestmentClass = () => setInvestmentClasses([...investmentClasses,newInvestmentClass()])
    const deleteInvestmentClass = (id: string) => {
      const newClasses = investmentClasses.filter(c => c.id !== id)
      setInvestmentClasses(newClasses)
    }
    const changeInvestmentClass = (invcls:InvestmentClass) => {
      const updatedClasses = [...investmentClasses]
      let index = updatedClasses.findIndex( cls => cls.id === invcls.id)
      updatedClasses[index]=invcls
      setInvestmentClasses(updatedClasses)
    }
    const addInvestmentCategory = (invcls:InvestmentClass) => {
      invcls.categories.push(newInvestmentCategory())
      changeInvestmentClass(invcls)
    }
    console.log('Context',investmentClasses)
    return (
        <CalculatorContext.Provider value={{
          startYear,numberYears,setYear,setSpan,
          investmentClasses, addInvestmentClass, deleteInvestmentClass, changeInvestmentClass, addInvestmentCategory
        }}>
          {children}
        </CalculatorContext.Provider>
      );
}