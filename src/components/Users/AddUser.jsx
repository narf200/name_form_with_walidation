import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

export default function AddUser() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">AddUser</label>
        <input id="username" type="text" />
        <label htmlFor="userage">User (Age)</label>
        <input id="userage" type="number" />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
}
