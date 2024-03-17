import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import classes from "./AddNewUser.module.css";
const AddNewUser = (props) => {
  const [enteredUserName, setUserName] = useState("");
  const [enteredUserAge, setUserAge] = useState("");
  const [error, setError] = useState();
  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter valid non-empty name and age values.",
      });
      return;
    }
    if (Number(enteredUserAge) < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age above 0.",
      });
      return;
    }

    props.onAddUser(enteredUserName, enteredUserAge);
    setUserAge("");
    setUserName("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enteredUserAge}
            onChange={userAgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddNewUser;
