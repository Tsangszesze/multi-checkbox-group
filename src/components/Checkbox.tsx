interface CheckboxProps {
  isChecked: boolean;
  onCheck: () => void;
  label: string;
}

export const Checkbox = (props: CheckboxProps) => {
  const { isChecked, onCheck, label } = props;
  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onCheck} />
      <span>{label}</span>
    </label>
  );
};
