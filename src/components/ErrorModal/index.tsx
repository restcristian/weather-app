import classnames from "classnames";
import React from "react";
import styles from "./errorModal.module.scss";

interface Props {
  hasError: boolean;
  message?: string;
}

const ErrorModal: React.FC<Props> = ({ hasError, message }) => {
  if (!hasError) {
    return null;
  }
  return (
    <div
      className={classnames(styles.errorModal, { [styles.isOpen]: hasError })}
    >
      <div className={styles.content}>
        <div className={styles.contentItem}>
          <span className={styles.contentTitle}>{message}</span>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
