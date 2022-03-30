import styles from "./UserForm.module.scss";

const UserForm = () => {
  return (
    <form className={styles["user-form"]}>
      <div className={styles["user-form__item"]}>
        <label>Username</label>
        <input type="text" />
      </div>
      <div className={styles["user-form__item"]}>
        <label>Age (Years)</label>
        <input type="number" />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
