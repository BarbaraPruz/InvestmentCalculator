import React from 'react';
import NumberInputField from '../components/numberInputField';
import MoneyInputField from '../components/moneyInputField';
import {CalculatorStore} from '../context/calculatorStore'; 
import {Form} from 'react-bootstrap';
import { InjectionFrequency } from '../global.d';

export const DescriptionTab = (): JSX.Element => {
    const {state, dispatch}= React.useContext(CalculatorStore);
    const {numberYears, initialInvestment, rate, injectionAmount, injectionFrequency}= state; 
    const [freq, setFreq] = React.useState(injectionFrequency.toString())

    const onFrequencySelected = () => {
        dispatch({type:'SetInjectionFrequency',frequency:InjectionFrequency[freq as keyof typeof InjectionFrequency]})
    }

    function getEnumKeyByEnumValue<T extends {[index:string]:string}>(myEnum:T, enumValue:string):keyof T {
        let keys = Object.keys(myEnum).filter(x => myEnum[x] == enumValue);
        return keys.length > 0 ? myEnum[keys[0]] : Object.keys(myEnum)[0];
    }
    return (
    <div className="card w-50 m-auto">
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
            <label className="col-sm-6 text-right pr-0">Annual Interest Rate:</label>
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
        <p>TBD Random variable interest rate</p>
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
            <Form.Control as="select" size='sm' onChange={e=>setFreq(e.target.value)}
             onBlur={onFrequencySelected}>
                {
                    Object.keys(InjectionFrequency).map ( f  => {
                        return <option  key={f.toString()} value={f.toString()}>{f}</option>
                    })
                }
            </Form.Control>
            </div>
        </div>
    </div>
    )
}

export default DescriptionTab;
