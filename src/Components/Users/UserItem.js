import styles from "./UserItem.module.scss";

const UserItem = (props) => {
  return (
    <li className={styles["user-item"]}>
      <span>{props.username}</span>
      <span>({props.age})</span>
    </li>
  );
};

export default UserItem;
