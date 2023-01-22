import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./iconButton.module.scss";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: JSX.Element;
}
const IconButton: React.FC<Props> = ({ children, ...rest }) => {
  return <button {...rest} className = {styles.iconButton}>{children}</button>;
};

export default IconButton;
