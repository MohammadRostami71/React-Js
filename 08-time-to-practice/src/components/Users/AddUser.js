import React , {useState} from "react";

import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {
    const [enteredUsername,setEnteredUsername]=useState('');
    const [enteredAge,setEnteredAge]=useState('');
    const [error,setError]=useState();

    const AddUserHandler= (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title:"Invalid Input",
                message:"Please Enter valid name and age (non-empty value)."
            });
            return;
        }
        if (+enteredAge < 1){
            setError({
                title:"Invalid Age",
                message:"Please Enter valid age (> 0)."
            });
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler= (event) => {
            setEnteredUsername(event.target.value);
    };
    const ageChangeHandler= (event) => {
            setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return(
        <div>
            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}
            <Card className={classes.input}>
                <form onSubmit={AddUserHandler}>
                    <label htmlFor="username">User Name</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                    <label htmlFor="age">Age</label>
                    <input id="age" type="text" value={enteredAge} onChange={ageChangeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;