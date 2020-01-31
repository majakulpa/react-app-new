import React from "react";
import styles from "./Toolbar.module.css";

const toolbar = props => {
  return (
    <header className={styles.Toolbar}>
      <div>Menu</div>
      <div>Logo</div>
      <nav>
        <ul>
          <li>item</li>
        </ul>
      </nav>
    </header>
  );
};

export default toolbar;
