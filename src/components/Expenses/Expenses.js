import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesList from "./ExpensesList";

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
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
}

export default Expenses;