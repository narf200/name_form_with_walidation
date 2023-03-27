import Card from "../UI/Card";
import styles from "./UserList.module.css";

export default function UserList({ users }) {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map(({ name, age, id }) => (
          <li key={id}>
            {name} ({age} ears old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
