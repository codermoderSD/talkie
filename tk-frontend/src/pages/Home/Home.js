import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/shared/Button/Button";
import Card from "../../components/shared/Card/Card";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  const startRegister = () => {
    navigate("/register");
  };

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Talkie !" icon="logo.svg">
        <p className={styles.para}>
          Want to connect and share ideas with like-minded developers? You can
          join the room and connect with other developers directly. Host a meet
          or join one!
        </p>
        <div>
          <Button onClick={startRegister} text="Get your username" />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.foText}>Have an invite text?</span>
          <Link className={styles.foLink} to="/login">
            Sign In
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
