import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchInput.scss";

const SearchInput = () => (
  <div className={styles.header__searchContainer}>
    <div className={styles.header__searchBlock}>
      <FontAwesomeIcon
        className={styles.header__search}
        icon={faSearch}
        size={"sm"}
        color={"black"}
      />
    </div>
    <input className={styles.header__searchInput} type="text" />
  </div>
);

export default SearchInput;
