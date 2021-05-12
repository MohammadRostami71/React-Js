import React , {useState , useRef} from "react";

import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = props => {
    const nameInputRef=useRef();
    const ageInputRef=useRef();
    const [error,setError]=useState();

    const AddUserHandler= (event) => {
        event.preventDefault();
        const enterdName=nameInputRef.current.value;
        const enterdUserAge=ageInputRef.current.value;
        if (enterdName.trim().length === 0 || enterdUserAge.trim().length === 0){
            setError({
                title:"Invalid Input",
                message:"Please Enter valid name and age (non-empty value)."
            });
            return;
        }
        if (+enterdUserAge < 1){
            setError({
                title:"Invalid Age",
                message:"Please Enter valid age (> 0)."
            });
            return;
        }
        props.onAddUser(enterdName,enterdUserAge);
        nameInputRef.current.value='';
        ageInputRef.current.value='';
    };

    const errorHandler = () => {
        setError(null);
    }

    return(
        <Wrapper>
            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}
            <Card className={classes.input}>
                <form onSubmit={AddUserHandler}>
                    <label htmlFor="username">User Name</label>
                    <input id="username" type="text" ref={nameInputRef}/>
                    <label htmlFor="age">Age</label>
                    <input id="age" type="text" ref={ageInputRef}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;