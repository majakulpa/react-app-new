import React from "react";
import styles from "./DrawerToggle.module.css";

const drawerToggle = props => (
  <div onClick={props.opened} className={styles.DrawerToggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
