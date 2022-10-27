import React, { ReactNode } from "react";
import "./button.css";

interface ButtonProps {
  primary?: boolean;

  backgroundColor?: string;

  size?: "small" | "medium" | "large";

  children?: ReactNode;

  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={"button"}
      style={{ backgroundColor }}
      {...props}
    >
      <span className="buttonSpan">{children}</span>
    </button>
  );
};
