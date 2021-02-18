import React from 'react'
import CurrencyInput from 'react-currency-input-field';

interface MoneyInputFieldProps {
    initialValue: string,
    onChange: (value: number)=> void,
}

export const MoneyInputField: React.FC<MoneyInputFieldProps> = (props): JSX.Element => {

    const [value, setValue] = React.useState<string>(props.initialValue)

    const handleOnValueChange = (v: string|undefined): void => {
     //  if (v) setValue(v)
    }

    return (
        <CurrencyInput
            defaultValue={props.initialValue}
            decimalsLimit={2}
            name="money"
            onValueChange={(v:string|undefined, name?:string|undefined) => {if (v) setValue(v)}}
            onBlur={e=>props.onChange(Number(value))}
        />
    )
}

export default MoneyInputField