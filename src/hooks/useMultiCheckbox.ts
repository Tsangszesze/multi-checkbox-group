import { useState } from "react";

interface useMultiCheckboxProps {
  onChange: (values: string[]) => void;
  defaultValues?: string[];
}

export const useMultiCheckbox = ({
  onChange,
  defaultValues,
}: useMultiCheckboxProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(
    defaultValues || []
  );

  const toggleCheckbox = (value: string) => {
    const index = selectedValues.indexOf(value);
    const temp = [...selectedValues];
    index > -1 ? temp.splice(index, 1) : temp.push(value);
    setSelectedValues(temp);
    onChange(temp);
  };

  return { selectedValues, toggleCheckbox };
};
