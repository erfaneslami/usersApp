import { useState } from "react";
import Button from "../Ui/Button";
import styles from "./UserForm.module.scss";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameInputHandler = (e) => {
    setUsername(e.target.value);
  };
  const ageInputHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      id: Math.random().toString(),
      username: username,
      age: age,
    };
    props.onAddUser(userData);
  };

  return (
    <form className={styles["user-form"]} onSubmit={submitHandler}>
      <div className={styles["user-form__item"]}>
        <label>Username</label>
        <input type="text" onChange={usernameInputHandler} />
      </div>
      <div className={styles["user-form__item"]}>
        <label>Age (Years)</label>
        <input type="number" onChange={ageInputHandler} />
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default UserForm;
