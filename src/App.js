import React, { useState } from "react";
import UserList from "./components/MainFunctionality/UserList";
import AddNewUser from "./components/MainFunctionality/AddNewUser";
function App() {
  const [UsersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge, uCollege) => {
    setUsersList((prevState) => {
      return [...prevState, { name : uName, age : uAge, id : Math.random().toString(), college : uCollege}];
    });
  };
  return (
    <div>
      <AddNewUser onAddUser={addUserHandler} />
      <UserList users={UsersList} />
    </div>
  );
}

export default App;
