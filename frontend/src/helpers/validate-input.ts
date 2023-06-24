const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
const passwordRegex = new RegExp(
  "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
);

const validateInput = (name: string, value: string, match: boolean) => {
  if (name === "email") {
    return !emailRegex.test(value)
      ? { error: true, message: "Invalid email" }
      : { error: false };
  } else if (name === "password") {
    return !passwordRegex.test(value)
      ? {
          error: true,
          message:
            "Password should contain at least one uppercase letter, one lowercase letter, one number, one special character",
        }
      : { error: false };
  } else if (name === "passwordConfirm") {
    return !match
      ? { error: true, message: "Passwords should match" }
      : { error: false };
  }
};

export { validateInput };
