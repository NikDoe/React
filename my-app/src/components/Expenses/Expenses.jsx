import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";


function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    return (
            <Card className="expenses">
                <ExpensesFilter className='expenses-filter' selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {props.items.map(expense =>
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                )}
            </Card>
    );
}

export default Expenses;