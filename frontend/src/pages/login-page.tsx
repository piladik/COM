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

function LoginPage(): JSX.Element {
  const formConfig: TFormConfig = {
    form: { email: "", password: "" },
    placeholders: ["Enter Email", "Password"],
    button: { text: "Login" },
  };
  return (
    <div className="flex flex-col px-4 text-center">
      <h1 className="font-medium mt-20 text-lg">Register</h1>
      <Form formConfig={formConfig} />
      <hr className="border-white my-10" />
      <Button secondary rounded>
        <IoLogoGoogle />
        Continue with Google
      </Button>
    </div>
  );
}

export { LoginPage };
