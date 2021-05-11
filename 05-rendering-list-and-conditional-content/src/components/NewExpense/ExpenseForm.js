import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, seteEteredTitle] = useState('');
    const [enteredAmount, seteEteredAmount] = useState('');
    const [enteredDate, seteEteredDate] = useState('');

    // const [userInput,setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })

    const titleChangeHandler = (event) => {
        seteEteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return{
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     };
        // });
    };

    const amountChangeHandler = (event) => {
        seteEteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return{
        //         ...prevState,
        //         enteredAmount: event.target.value
        //     };
        // });
    };

    const dateChangeHandler = (event) => {
        seteEteredDate(event.target.value);
        /*Merge State*/
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
        /* Another Approach */
        // setUserInput((prevState) => {
        //     return{
        //         ...prevState,
        //         enteredDate: event.target.value
        //     };
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        seteEteredTitle('');
        seteEteredDate('');
        seteEteredAmount('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text'
                           value={enteredTitle}
                           onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'
                           min="0.01"
                           step="0.01"
                           value={enteredAmount}
                           onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date'
                           min="2019-01-01"
                           max="2022-12-31"
                           value={enteredDate}
                           onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;