import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {

    const [activeForm, setActiveForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setActiveForm(false);
    };

    const activateFormHandler = () => {        
        setActiveForm(true);
    }

    const deactivateFormHandler = () => {
        setActiveForm(false);
    }

    return <div className='new-expense'>
        <div>
            {!activeForm && <button onClick={activateFormHandler}>Add New Expense</button>}
            {activeForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onDeactivateForm={deactivateFormHandler}/>}
        </div>
    </div>;
};

export default NewExpense;