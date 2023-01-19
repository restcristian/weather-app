import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "./spinner.module.scss";

function Spinner() {
  return (
    <div className={styles.spinner}>
      <AiOutlineLoading3Quarters />
    </div>
  );
}

export default Spinner;
