import React from 'react';
import NumberInputField from './numberInputField';
import MoneyInputField from './moneyInputField';
import {CalculatorStore} from '../context/calculatorStore'; 
import {Form} from 'react-bootstrap';
//import { InjectionFrequency } from '../global.d';
enum InjectionFrequency {
    None = 0,
    Annually = 1,
}
export const SavingsPlan = (): JSX.Element => {
    const {state, dispatch}= React.useContext(CalculatorStore);
    const {numberYears, initialInvestment, rate, injectionAmount, injectionFrequency}= state; 
    const [freq, setFreq] = React.useState(injectionFrequency)

    const onFrequencySelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = InjectionFrequency[e.target.value as keyof typeof InjectionFrequency]
        setFreq(newValue)
        dispatch({type:'SetInjectionFrequency',frequency:newValue})
    }

    return (
    <div className="card w-50">
        <h2>Savings Plan</h2>
        <div className="row">
            <label className="col-sm-6 text-right pr-0">Years to Invest:</label>
            <div className="col-sm-6 text-left pl-1">
                <NumberInputField
                    onChange={(value:string) => dispatch({type:'SetNumberYears',years:Number(value)})}
                    min="1"
                    max="100"
                    initialValue={numberYears.toString()}
                />
             </div>
        </div>
        <div className="row">
            <label className="col-sm-6 text-right pr-0">Initial Amount:</label>
            <div className="col-sm-6 text-left pl-1">
                <MoneyInputField
                    onChange={(value:string) => dispatch({type:'SetInitialInvestment',amount:Number(value)})}
                    initialValue={initialInvestment.toString()}
                />
             </div>
        </div>

        <div className="row">
            <label className="col-sm-6 text-right pr-0">Annual Interest Rate(compounded monthly):</label>
            <div className="col-sm-6 text-left pl-1">
                <NumberInputField
                    onChange={(value:string) => dispatch({type:'SetRate',rate:Number(value)})}
                    initialValue={rate.toString()}
                    min="0.01"
                    max="99.99"
                    step=".01"
                />
             </div>
        </div>
        <div className="row">
            <label className="col-sm-6 text-right pr-0">Injection Amount:</label>
            <div className="col-sm-6 text-left pl-1">
                <MoneyInputField
                    onChange={(value:string) => dispatch({type:'SetInjectionAmount',amount:Number(value)})}
                    initialValue={injectionAmount.toString()}
                />
             </div>
        </div>
        <div className="row">
            <label className="col-sm-6 text-right pr-0">Injection Frequency:</label>
            <div className="col-sm-4 pl-1">
            <Form.Control as="select" size='sm' onChange={onFrequencySelected}>
                {
                    Object.keys(InjectionFrequency).map ( f  => {
                        return isNaN(Number(f)) ? <option key={f.toString()} value={f.toString()}>{f}</option> : ''
                    })
                }
            </Form.Control>
            </div>
        </div>
    </div>
    )
}

export default SavingsPlan;
