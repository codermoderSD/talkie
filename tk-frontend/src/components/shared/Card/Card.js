import React from "react";
import styles from "./Card.module.css";

const Card = ({ icon, title, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.headingWrapper}>
        <img className={styles.logo} src={`/images/${icon}`} alt="logo" />
        <h1 className={styles.heading}>{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default Card;
