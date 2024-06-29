interface CheckboxProps {
  isChecked: boolean;
  onCheck: () => void;
  label: string;
  index: number;
}

export const Checkbox = (props: CheckboxProps) => {
  const { isChecked, onCheck, label, index } = props;

  return (
    <label style={{ gridArea: `area-${index}` }}>
      <input type="checkbox" checked={isChecked} onChange={onCheck} />
      <span>{label}</span>
    </label>
  );
};
