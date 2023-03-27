import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

export default function AddUser({ getData }) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (userAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age ( > 0 ).",
      });
      return;
    }

    getData(userName, userAge);
    console.log({ name: userName, age: userAge });

    setUserName("");
    setUserAge("");
  };

  const changeUserNameHandle = (e) => {
    setUserName(e.target.value);
  };

  const UserAgeChangeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const errorHandler = (e) => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          errorHandler={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">AddUser</label>
          <input
            id="username"
            type="text"
            onChange={changeUserNameHandle}
            value={userName}
          />
          <label htmlFor="userage">User (Age)</label>
          <input
            id="userage"
            type="number"
            onChange={UserAgeChangeHandler}
            value={userAge}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
}
