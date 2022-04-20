import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFiteredYear] = useState('2020');
  const onChangeFilter = (selectedFilter) => {
    setFiteredYear(selectedFilter);

    console.log(filteredYear);
  }
  const filteredExpense = props.items.filter(item => item.date.getFullYear().toString() === filteredYear)

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={ filteredYear } onChangeFilter={ onChangeFilter } />
        <ExpensesChart expenses={ filteredExpense }></ExpensesChart>
        <ExpensesList items={ filteredExpense } />

      </Card>
    </div>
  );
}

export default Expenses;
