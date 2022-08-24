import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const yearToFilter = selectedYear => {
        setFilteredYear(selectedYear);
    }

    let filteredExpenses=props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onYearFilter={yearToFilter} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
}

export default Expenses;