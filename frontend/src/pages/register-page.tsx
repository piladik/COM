import Button from "../components/button/button";
import { Form } from "../components/form/form";
import { IoLogoGoogle } from "react-icons/io5";

export type TFormConfig = {
  form: { [key: string]: string };
  placeholders: Array<string>;
  button: {
    text: string;
  };
};

function RegisterPage(): JSX.Element {
  const formConfig: TFormConfig = {
    form: { email: "", password: "", passwordConfirm: "" },
    placeholders: ["Enter Email", "Password", "Confirm Password"],
    button: { text: "Create an Account" },
  };
  return (
    <div className="flex flex-col px-4 text-center">
      <h1 className="font-medium mt-20 text-lg">Register</h1>
      <Form formConfig={formConfig} />
      <p className="mt-5 text-gray-dark mb-10">Already have an account?</p>
      <hr className="border-white mb-10" />
      <Button secondary rounded>
        <IoLogoGoogle />
        Continue with Google
      </Button>
    </div>
  );
}

export { RegisterPage };
