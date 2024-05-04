
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { GrSubtractCircle } from "react-icons/gr";

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const {currency} = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        
        <td><input type = "image" src = "https://t4.ftcdn.net/jpg/05/55/67/69/360_F_555676957_6FCvG6xx7axtwOlBrjfYTkytNAUdAFUx.jpg" width = "20px" onClick={event=> increaseAllocation(props.name)}/></td>
        <td><input type = "image" src = "https://pngimg.com/d/minus_PNG39.png" width = "20px" onClick={event=> decreaseAllocation(props.name)}/></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;


//https://t4.ftcdn.net/jpg/05/55/67/69/360_F_555676957_6FCvG6xx7axtwOlBrjfYTkytNAUdAFUx.jpg