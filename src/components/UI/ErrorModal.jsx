import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const Backdrop = ({ errorHandler }) => {
  return <div className={styles.backdrop} onClick={errorHandler} />;
};

const ModalOverlay = ({ title, message, errorHandler }) => {
  return (
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
  );
};

export default function ErrorModal({ title, message, errorHandler }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop errorHandler={errorHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          message={message}
          errorHandler={errorHandler}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
}
