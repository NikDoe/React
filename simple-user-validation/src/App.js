import React, {Fragment, useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";


function App() {
    const [usersList, setUsersList] = useState([]);

    const addNewUserHandler = (userName, userAge) => {
        setUsersList(
            prevUsersList => {
                return [
                    ...prevUsersList,
                    {
                        name: userName,
                        age: userAge,
                        id: new Date().getTime()
                    }
                ]
            }
        )
    }
    return (
        <Fragment>
            <AddUser onAddUser={addNewUserHandler}/>
            <UsersList users={usersList}/>
        </Fragment>
    )
}

export default App;
