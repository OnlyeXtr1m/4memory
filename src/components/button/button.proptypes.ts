import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  displayType: "primary" | "dark" | "lined" | "none";
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
}
