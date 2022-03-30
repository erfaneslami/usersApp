import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.scss";

const ErrorModal = (props) => {
  const closeHandler = () => {
    props.onClose();
  };

  return (
    <div className={styles.bg} onClick={closeHandler}>
      <Card>
        <h1>Invalid input</h1>
        <p>{props.errorMessage}</p>
        <Button onClick={closeHandler}>Okay</Button>
      </Card>
    </div>
  );
};

export default ErrorModal;
