import { useState } from "react";
import { CheckboxOption } from "../types/Checkbox";

interface useMultiCheckboxProps {
  options: CheckboxOption[];
  onChange: (values: string[]) => void;
  defaultValues?: string[];
}

// Manage the state of selected values of a multi-checkbox group

export const useMultiCheckbox = (props: useMultiCheckboxProps) => {
  const { options, onChange, defaultValues } = props;
  const [selectedValues, setSelectedValues] = useState<string[]>(
    defaultValues?.filter((value) =>
      options.map((option) => option.value).includes(value)
    ) || []
  );

  const toggleCheckbox = (value: string) => {
    const index = selectedValues.indexOf(value);
    const temp = [...selectedValues];
    index > -1 ? temp.splice(index, 1) : temp.push(value);
    setSelectedValues(temp);
    onChange(temp);
  };

  const toggleSelectAll = () => {
    selectedValues.length === options.length
      ? setSelectedValues([])
      : setSelectedValues(options.map((option) => option.value));
  };

  return { selectedValues, toggleCheckbox, toggleSelectAll };
};
