import React from "react";
import styles from "./searchbox.module.scss";
import classnames from "classnames";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rightIcon?: JSX.Element;
  placeholder?: string;
}

const InputBox: React.FC<Props> = ({ rightIcon, ...rest }) => {
  return (
    <div
      data-testid="input-box"
      className={classnames(styles.inputBox, { [styles.hasIcon]: rightIcon })}
    >
      <input {...rest} className={styles.input} />
      {rightIcon && (
        <div data-testid="icon" className={styles.iconContainer}>
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default InputBox;
