import React from 'react'

interface NumberInputFieldProps {
    max: string,
    min: string
    initialValue: string,
    step?: string,
    onChange: (value: string)=> void,
}

export const NumberInputField: React.FC<NumberInputFieldProps> = (props): JSX.Element => {

    const [value, setValue] = React.useState(props.initialValue)

    return (
        <input 
            className="w-4em"
            type="number"
            min={props.min}
            max={props.max}
            step={props.step || '1'}
            value={value} 
            onChange={e=>setValue(e.target.value)} 
            onBlur={e=>props.onChange(value)}/>
    )
}

export default NumberInputField