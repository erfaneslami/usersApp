import { useState } from "react";
import "./App.scss";
import NewUser from "./Components/NewUser/NewUser";
import Users from "./Components/Users/Users";

function App() {
  const [users, setUsers] = useState([]);

  const saveUserHandler = (userData) => {
    console.log(userData);
    setUsers((preState) => {
      return [userData, ...preState];
    });
  };

  return (
    <>
      <NewUser onAddUser={saveUserHandler} />
      <Users users={users} />
    </>
  );
}

export default App;
