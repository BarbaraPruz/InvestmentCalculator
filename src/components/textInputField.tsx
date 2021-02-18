import React from 'react'
interface TextInputFieldProps {
    initialValue: string,
    onChange: (value: string)=> void,
}

export const TextInputField: React.FC<TextInputFieldProps> = (props): JSX.Element => {

    const [value, setValue] = React.useState(props.initialValue)

    return (
        <input 
            type="text"
            value={value} 
            onChange={e=>setValue(e.target.value)} 
            onBlur={e=>props.onChange(value)}/>
    )
}

export default TextInputField