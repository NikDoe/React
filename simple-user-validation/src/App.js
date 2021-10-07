import React, {useState} from 'react';
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
        <div>
            <AddUser onAddUser={addNewUserHandler}/>
            <UsersList users={usersList}/>
        </div>
    )
}

export default App;
