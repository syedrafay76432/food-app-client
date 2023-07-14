import React, { useRef, useState } from 'react';
import classes from './MealItemFrom.module.css'
import Input from '../../UI/Input';

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmountNumber === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false)
            return;
        }
        props.onAddToCart(enteredAmountNumber);

    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: props.id,
                    type: 'number',
                    step: '1',
                    min: '1',
                    max: '5',
                    defaultValue: '1'
                }} />
            <button>+Add</button>
            {!amountIsValid && <p>Please enter Valid Amount (1-5).</p>}
        </form >
    );
};

export default MealItemForm;
