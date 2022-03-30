import "./App.scss";
import NewUser from "./Components/NewUser/NewUser";
import Users from "./Components/Users/Users";

function App() {
  const saveUserHandler = (userData) => {
    console.log(userData);
  };

  return (
    <>
      <NewUser onAddUser={saveUserHandler} />;
      <Users />
    </>
  );
}

export default App;
