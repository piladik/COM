import { TButtonProps } from "./button-types";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  className,
  ...rest
}: TButtonProps): JSX.Element {
  let classes = classNames(
    className,
    "flex items-center justify-center gap-x-1 px-3 py-1.5 border font-medium",
    {
      "border-primary bg-primary text-black hover:bg-primary-light": primary,
      "border-secondary bg-secondary text-black hover:bg-tertiary-light":
        secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-500 bg-yellow-500 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-lg": rounded,
      "bg-white": outline,
      "text-primary": outline && primary,
      "text-secondary": outline && secondary,
      "text-green-500": outline && success,
      "text-red-500": outline && danger,
      "text-yellow-500": outline && warning,
    }
  );

  classes = twMerge(classes);
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
