/* eslint-disable react/prop-types */
import React from "react";

interface NumberInputFieldProps {
  max: string;
  min: string;
  initialValue: string;
  step?: string;
  onChange: (value: string) => void;
  htmlId: string;
}

export const NumberInputField: React.FC<NumberInputFieldProps> = (
  props
): JSX.Element => {
  const [value, setValue] = React.useState(props.initialValue);

  return (
    <input
      id={props.htmlId}
      className="w-2em"
      type="number"
      min={props.min}
      max={props.max}
      step={props.step || "1"}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={() => props.onChange(value)}
      onKeyPress={(event) => {
        if (event.key === "Enter") props.onChange(value);
      }}
    />
  );
};

export default NumberInputField;
