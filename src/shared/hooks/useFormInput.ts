import { useState } from "react";

interface FormInput {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function useFormInput(initialValue: string): FormInput {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  return {
    value,
    onChange: handleChange,
  };
}
