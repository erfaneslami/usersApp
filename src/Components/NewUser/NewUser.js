import Card from "../Ui/Card";
import "./NewUser.scss";
import UserForm from "./UserForm";

const NewUser = (props) => {
  const userHandler = (userData) => {
    props.onAddUser(userData);
  };

  return (
    <Card>
      <UserForm onAddUser={userHandler} />;
    </Card>
  );
};

export default NewUser;
