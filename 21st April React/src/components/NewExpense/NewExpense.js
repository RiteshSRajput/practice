import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'


const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);
    const onExpenseSave = (expense) => {
        console.log(expense)
        props.onAddExpense(expense);
    }
    const displayAddExpenseForm = () => {
        setShowForm(true);
    }
    const hideAddExpenseForm = () => {
        setShowForm(false);
    }
    return (
        <div className="new-expense">
            { !showForm ? (<button onClick={ displayAddExpenseForm }>Add New Expense</button>) :
                <ExpenseForm onSaveExpense={ onExpenseSave } onCancel={ hideAddExpenseForm }></ExpenseForm> }
        </div>
    )
}

export default NewExpense;