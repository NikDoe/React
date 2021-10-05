import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: new Date().getTime(),
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const endEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={endEditingHandler}
            />}
        </div>
    );
}

export default NewExpense;