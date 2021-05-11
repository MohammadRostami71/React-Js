import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const changeFilterHandler = seletedYear => {
        setFilteredYear(seletedYear);
    };

    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() ==filteredYear;
    });
    return (
        <Card className='expenses'>
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={changeFilterHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList item={filteredExpenses}/>
        </Card>
    )
}

export default Expenses;
