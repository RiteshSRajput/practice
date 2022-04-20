import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const onTitleChange = (event) => {
        setEnteredTitle(event.target.value);
    }
    const onPriceChange = (event) => {
        setEnteredPrice(event.target.value);
    }
    const onDateChange = (event) => {
        setEnteredDate(event.target.value);
    }
    const onAddExpenseSubmit = (event) => {
        event.preventDefault();
        let expense = {
            title: enteredTitle,
            amount: +enteredPrice,
            date: new Date(enteredDate),
            id: new Date().getMilliseconds()
        }
        setEnteredDate('');
        setEnteredPrice('');
        setEnteredTitle('');
        props.onSaveExpense(expense);

    }
    return (
        <form onSubmit={ onAddExpenseSubmit }>
            <div className="new-expense__controls">

                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={ enteredTitle } onChange={ onTitleChange }></input>
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input type="number" min="0.01" step="0.01" value={ enteredPrice } onChange={ onPriceChange }></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={ enteredDate } onChange={ onDateChange }></input>
                </div>

            </div>
            <div className="new-expense__actions">
                <button type="button" className="alternative" onClick={ props.onCancel }>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;