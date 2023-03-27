import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

export default function ErrorModal({ title, message, errorHandler }) {
  return (
    <div>
      <div className={styles.backdrop} onClick={errorHandler}>
        <Card className={styles.modal}>
          <header className={styles.header}>
            <h1>{title}</h1>
          </header>
          <div className={styles.content}>
            <p>{message}</p>
          </div>
          <footer className={styles.actions}>
            <Button onClick={errorHandler}>Ok</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
}
