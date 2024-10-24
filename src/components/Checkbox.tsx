import React from 'react';
import '../styles/Checkbox.css';

interface CheckboxProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  iconOn: string;
  iconOff: string;
  label: string;
  labelClass?: string;
}

function Checkbox({
  checked,
  onChange,
  iconOn,
  iconOff,
  label,
  labelClass,
}: CheckboxProps) {
  return (
    <label>
      <input id="checkbox" type="checkbox" checked={checked} onChange={onChange} />
      <img id="checkIcon" src={checked ? iconOn : iconOff} alt="체크박스" />
      <span className={labelClass}>{label}</span>
    </label>
  );
}

export default Checkbox;