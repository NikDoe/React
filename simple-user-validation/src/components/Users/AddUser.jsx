const AddUser = props => {
    const addUserHandler = event => {
        event.preventDefault();
        console.log('add new user');
    }

    return(
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">your name</label>
            <input type="text" id='username'/>
            <label htmlFor="age">your age</label>
            <input type="text" id='age'/>
            <button type='submit'>add</button>
        </form>
    )
}

export default AddUser;