import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  displayType: "primary" | "dark" | "bordered" | "none";
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
}
