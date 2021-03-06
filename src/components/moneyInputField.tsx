/* eslint-disable react/prop-types */
import React from "react";
import CurrencyInput from "react-currency-input-field";

interface MoneyInputFieldProps {
  initialValue: string;
  htmlId: string;
  onChange: (value: string) => void;
}

export const MoneyInputField: React.FC<MoneyInputFieldProps> = (
  props
): JSX.Element => {
  const [value, setValue] = React.useState<string>(props.initialValue);
  return (
    <CurrencyInput
      id={props.htmlId}
      defaultValue={value}
      decimalsLimit={2}
      prefix={"$"}
      allowDecimals={false}
      name="money"
      onValueChange={(v: string | undefined) => {
        if (v) setValue(v);
      }}
      // eslint-disable-next-line react/prop-types
      onBlur={() => props.onChange(value)}
      onKeyPress={(event) => {
        // eslint-disable-next-line react/prop-types
        if (event.key === "Enter") props.onChange(value);
      }}
      className="w-6em"
    />
  );
};

export default MoneyInputField;
