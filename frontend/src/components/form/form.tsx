import { ChangeEvent, FormEvent } from "react";
import { useForm } from "../../hooks/use-form";
import { FormInput } from "../form-input/form-input";
import Button from "../button/button";
import { TFormConfig } from "../../pages/login-page";

function Form({ formConfig }: { formConfig: TFormConfig }): JSX.Element {
  const { form, handleChange } = useForm(formConfig.form);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  const formValues = Object.entries(form);

  const content = formValues.map((input, index) => {
    return (
      <FormInput
        name={input[0]}
        value={input[1]}
        placeholder={formConfig.placeholders[index]}
        onChangeFn={onChange}
        key={input[0]}
      />
    );
  });
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-5">
        {content}
        <Button primary rounded type="submit" className="mt-3">
          {formConfig.button.text}
        </Button>
      </form>
    </>
  );
}

export { Form };
