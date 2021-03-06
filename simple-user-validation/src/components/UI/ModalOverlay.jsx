import styles from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";

const ModalOverlay = props => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onConfirm}>okay</Button>
            </footer>
        </Card>
    )
}

export default ModalOverlay;