import { ChangeEvent } from "react";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { validateInput } from "../../helpers/validate-input.ts";

type TFormInput = {
  value: string;
  name: string;
  placeholder: string;
  match: boolean;
  onChangeFn: (e: ChangeEvent<HTMLInputElement>) => void;
};

function FormInput({
  value,
  name,
  placeholder,
  match,
  onChangeFn,
}: TFormInput): JSX.Element {
  const validatedInput = validateInput(name, value, match);
  let inputClasses = classNames("p-2 bg-secondary opacity-70 rounded-lg", {
    "outline-none": value,
    "outline-error": validatedInput?.error,
    "outline-success": !validatedInput?.error,
  });
  let validationClasses = classNames("text-left text-xs hidden ml-2", {
    block: value,
    "text-error": validatedInput?.error,
    "text-success": !validatedInput?.error,
  });
  validationClasses = twMerge(validationClasses);
  inputClasses = twMerge(inputClasses);
  return (
    <>
      <input
        type="text"
        value={value}
        name={name}
        className={inputClasses}
        placeholder={placeholder}
        onChange={onChangeFn}
      />
      <span className={validationClasses}>
        {validatedInput?.message || "Success"}
      </span>
    </>
  );
}

export { FormInput };
