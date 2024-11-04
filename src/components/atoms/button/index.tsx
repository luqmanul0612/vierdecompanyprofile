import React from "react";
import "./button.scss";
import clsx from "clsx";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonPropTypes
>((props, ref) => {
  const { className, startIcon, endIcon, variant = "primary", ...rest } = props;
  return (
    <button
      {...rest}
      ref={ref}
      className={clsx("Button-root", className, {
        primary: variant === "primary",
        secondary: variant === "secondary",
      })}
    >
      {!!startIcon && <div className="Button-start-icon">{startIcon}</div>}
      {props.children}
      {!!endIcon && <div className="Button-end-icon">{endIcon}</div>}
    </button>
  );
});

export default Button;

Button.displayName = "Button";

type ButtonPropTypes = {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: "primary" | "secondary";
};
