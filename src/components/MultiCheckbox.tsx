import { useMultiCheckbox } from "../hooks/useMultiCheckbox";
import { CheckboxOption } from "../types/Checkbox";
import { Checkbox } from "./Checkbox";
import "../styles/MultiCheckbox.css";
import { ReactNode } from "react";
import { useVerticalGrid } from "../hooks/useVerticalGrid";

interface MultiCheckboxProps {
  options: CheckboxOption[];
  defaultValues?: string[];
  onChange: (values: string[]) => void;
  columnCount: number;
  renderControlPanel?: (
    options: CheckboxOption[],
    selectedValues: string[]
  ) => ReactNode;
}

export const MultiCheckbox = (props: MultiCheckboxProps) => {
  const { options, defaultValues, onChange, columnCount, renderControlPanel } =
    props;

  const gridString = useVerticalGrid({ totalCount: options.length + 1, columnCount });
  const { selectedValues, toggleCheckbox, toggleSelectAll } = useMultiCheckbox({
    options,
    onChange,
    defaultValues,
  });

  return (
    <>
      <div
        id="multi-checkbox"
        style={{
          gridTemplateColumns: `repeat(${
            options.length ? columnCount : 1
          }, 1fr)`,
          gridTemplateAreas: gridString
        }}
      >
        {options.length ? (
          <>
            <Checkbox
              index={0}
              label={"select All"}
              onCheck={toggleSelectAll}
              isChecked={selectedValues.length === options.length}
            />
            {options.map((option, i) => (
              <Checkbox
                key={i}
                index={i + 1}
                label={option.label}
                onCheck={() => toggleCheckbox(option.value)}
                isChecked={selectedValues.includes(option.value)}
              />
            ))}
          </>
        ) : (
          "No option provided"
        )}
      </div>
      {renderControlPanel?.(options, selectedValues)}
    </>
  );
};
