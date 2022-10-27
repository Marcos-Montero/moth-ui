import { ReactNode } from "react";
import "./button.css";
interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: "small" | "medium" | "large";
    children?: ReactNode;
    onClick?: () => void;
}
export declare const Button: ({ primary, size, backgroundColor, children, ...props }: ButtonProps) => JSX.Element;
export {};
