import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className="container">
      <Link to="/" className={styles.nav}>
        <img className={styles.logo} src="/images/logo.svg" alt="logo" />
        <span className={styles.title}>Talkie</span>
      </Link>
    </nav>
  );
};

export default Navigation;
