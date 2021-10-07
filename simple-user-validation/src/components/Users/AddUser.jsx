import Card from "../UI/Card";
import styles from './AddUser.module.css';
import Button from "../UI/Button";
import {useState} from "react";

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = event => {
        event.preventDefault();
        console.log(enteredUsername, enteredAge);
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return(
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">your name</label>
                <input
                    type="text"
                    id='username'
                    onChange={usernameChangeHandler}
                />
                <label htmlFor="age">your age(years)</label>
                <input
                    type="number"
                    id='age'
                    onChange={ageChangeHandler}
                />
                <Button type='submit'>add user</Button>
            </form>
        </Card>
    )
}

export default AddUser;