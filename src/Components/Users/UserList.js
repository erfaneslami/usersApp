import styles from "./UserList.module.scss";
import UserItem from "./UserItem";

const UserList = () => {
  return (
    <ul className={styles["user-list"]}>
      <UserItem />
      <UserItem />
    </ul>
  );
};

export default UserList;
