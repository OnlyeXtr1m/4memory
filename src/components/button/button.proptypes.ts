import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  buttonType: "primary" | "dark" | "bordered" | "none";
}
