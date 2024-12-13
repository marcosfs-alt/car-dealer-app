import React from 'react';

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  label: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
}

export function Dropdown({ label, options, onChange }: DropdownProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex flex-col space-y-2">
      <label className="font-medium">{label}</label>
      <select
        onChange={handleChange}
        className="border border-gray-300 rounded p-2"
        defaultValue=""
      >
        <option value="" disabled>
          -- {label} --
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
