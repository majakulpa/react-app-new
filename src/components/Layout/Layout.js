import React from "react";
import styles from "./Layout.module.css";

const layout = props => (
  <>
    <div className={styles.Content}>Toolbar, sidedrawer, backdrop</div>
    <main>{props.children}</main>
  </>
);

export default layout;
