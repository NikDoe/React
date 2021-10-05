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

    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return (
            <Card className="expenses">
                <ExpensesFilter className='expenses-filter' selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {filteredExpenses.map(expense =>
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                )}
            </Card>
    );
}

export default Expenses;