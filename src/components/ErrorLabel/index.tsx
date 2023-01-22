import React from "react";
import styles from "./errorLabel.module.scss";

interface Props {
  error: Error | null;
}
const ErrorLabel: React.FC<Props> = ({ error }) => {
  if (!error) {
    return null;
  }
  return (
    <div className = {styles.errorLabel}>
      <span data-testid="error-label">{error.message}</span>
    </div>
  );
};

export default ErrorLabel;
