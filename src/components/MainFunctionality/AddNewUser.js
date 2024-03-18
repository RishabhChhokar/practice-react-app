import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import classes from "./AddNewUser.module.css";
const AddNewUser = (props) => {
  const userNameRef = useRef();
  const userAgeRef = useRef();
  const userCollegeRef = useRef();
  const [error, setError] = useState();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredUserName = userNameRef.current.value;
    const enteredUserAge = userAgeRef.current.value;
    const enteredCollegeName = userCollegeRef.current.value;
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0 ||
      enteredCollegeName.trim().length === 0
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

    props.onAddUser(enteredUserName, enteredUserAge, enteredCollegeName);
    userAgeRef.current.value = "";
    userNameRef.current.value = "";
    userCollegeRef.current.value = "";
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
          <input id="username" type="text" ref={userNameRef} />
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={userAgeRef} />
          <label htmlFor="college">College Name:</label>
          <input id="college" type="text" ref={userCollegeRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddNewUser;
