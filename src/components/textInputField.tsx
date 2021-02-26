import React from "react";
interface TextInputFieldProps {
  initialValue: string;
  onChange: (value: string) => void;
}

export const TextInputField: React.FC<TextInputFieldProps> = (
  props
): JSX.Element => {
  // eslint-disable-next-line react/prop-types
  const [value, setValue] = React.useState(props.initialValue);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      // eslint-disable-next-line react/prop-types
      onBlur={() => props.onChange(value)}
    />
  );
};

export default TextInputField;
