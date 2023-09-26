import React from 'react';
import cn from "classnames";

import {ButtonProps} from "@/components/button/button.proptypes";

import styles from "./button.module.scss";
export function Button({children, displayType = "primary", ...props}: ButtonProps) : React.ReactElement {
  return <button className={cn(styles.btn,
      { [styles.primary]: displayType === "primary",
      [styles.dark]: displayType === "dark",
      [styles.lined]: displayType === "bordered",
      [styles.none]: displayType === "none",
    })} {...props}>{children}</button>;
}
