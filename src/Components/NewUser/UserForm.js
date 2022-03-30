import { useState } from "react";
import Button from "../Ui/Button";
import ErrorModal from "../Ui/ErrorModal";
import styles from "./UserForm.module.scss";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);

  const usernameInputHandler = (e) => {
    setUsername(e.target.value);
  };
  const ageInputHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError("Please enter valid name and age (non-empty values).");
      return;
    }

    if (age <= 0) {
      setError("Please enter a valid age (age > 0)");
      return;
    }

    const userData = {
      id: Math.random().toString(),
      username: username,
      age: age,
    };

    setUsername("");
    setAge("");
    props.onAddUser(userData);
  };

  const closeErrorHandler = () => {
    setError(null);
  };

  return (
    <>
      <form className={styles["user-form"]} onSubmit={submitHandler}>
        <div className={styles["user-form__item"]}>
          <label>Username</label>
          <input type="text" onChange={usernameInputHandler} value={username} />
        </div>
        <div className={styles["user-form__item"]}>
          <label>Age (Years)</label>
          <input type="number" onChange={ageInputHandler} value={age} />
        </div>
        <Button type="submit">Add User</Button>
      </form>
      {error && <ErrorModal errorMessage={error} onClose={closeErrorHandler} />}
    </>
  );
};

export default UserForm;
