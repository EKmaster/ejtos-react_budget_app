
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Location from './Location';
const Budget = () => {
    const {currency} = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    
    const handleBudgetChange = (event) => {
        console.log(expenses)
        let total = 0
        let  arrayLength = expenses.length
        for (let i = 0; i < arrayLength; i++) {
            total += expenses[i].cost
            //Do something
        }
         
        if (event.target.value > 20000){ 
            alert("Increased max of 20,000")
        } else if (event.target.value < total){
            alert("Can not decrease budget below what is already spent!")
        
        }else {
        setNewBudget(event.target.value);
    }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
