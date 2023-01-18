import React from "react";
import styles from "./searchbox.module.scss";

interface Props {}

const SearchBox: React.FC<Props> = () => {
  return <input type="text" className={styles.searchBox} />;
};

export default SearchBox;
