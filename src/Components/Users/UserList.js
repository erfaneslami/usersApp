import styles from "./UserList.module.scss";
import UserItem from "./UserItem";

const UserList = (props) => {
  if (props.users.length === 0) {
    return <h2>no user found !</h2>;
  }
  return (
    <ul className={styles["user-list"]}>
      {props.users.map((user) => {
        return (
          <UserItem key={user.id} username={user.username} age={user.age} />
        );
      })}
    </ul>
  );
};

export default UserList;
