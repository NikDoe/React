import Card from "../UI/Card";
import styles from './AddUser.module.css';
import Button from "../UI/Button";

const AddUser = props => {
    const addUserHandler = event => {
        event.preventDefault();
        console.log('add new user');
    }

    return(
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">your name</label>
                <input type="text" id='username'/>
                <label htmlFor="age">your age</label>
                <input type="text" id='age'/>
                <Button type='submit'>add user</Button>
            </form>
        </Card>
    )
}

export default AddUser;