import { ChangeEvent } from "react";

type TFormInput = {
  value: string;
  name: string;
  placeholder: string;
  onChangeFn: (e: ChangeEvent<HTMLInputElement>) => void;
};

function FormInput({
  value,
  name,
  placeholder,
  onChangeFn,
}: TFormInput): JSX.Element {
  return (
    <input
      type="text"
      value={value}
      name={name}
      className="p-2 bg-secondary opacity-70 rounded-lg"
      placeholder={placeholder}
      onChange={onChangeFn}
    />
  );
}

export { FormInput };
