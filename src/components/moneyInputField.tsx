import React from "react";
import CurrencyInput from "react-currency-input-field";

interface MoneyInputFieldProps {
  initialValue: string;
  onChange: (value: string) => void;
}

export const MoneyInputField: React.FC<MoneyInputFieldProps> = (
  props
): JSX.Element => {
  const [value, setValue] = React.useState<string>(props.initialValue);

  return (
    <CurrencyInput
      defaultValue={value}
      decimalsLimit={2}
      prefix={"$"}
      allowDecimals={false}
      name="money"
      onValueChange={(v: string | undefined) => {
        if (v) setValue(v);
      }}
      onBlur={() => props.onChange(value)}
      onKeyPress={(event) => {
        if (event.key === "Enter") props.onChange(value);
      }}
      className="w-6em"
    />
  );
};

export default MoneyInputField;
