import styles from "./UserItem.module.scss";

const UserItem = (props) => {
  return (
    <li className={styles["user-item"]}>
      <span>name</span>
      <span>(age)</span>
    </li>
  );
};

export default UserItem;
