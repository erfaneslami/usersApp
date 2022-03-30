import Card from "../Ui/Card";
import UserList from "./UserList";

const Users = (props) => {
  return (
    <Card>
      <UserList users={props.users} />
    </Card>
  );
};

export default Users;
