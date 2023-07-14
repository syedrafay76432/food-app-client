import { useContext, useRef } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import Input from '../UI/Input';
import CartContext from '../../store/cart-context'

const ConfirmOrder = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const items = cartCtx.items
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    // console.log(items)

    const submitHandler = (event) => {
        event.preventDefault();
        props.onClick();
        props.onConfirm();

        const formData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            address: addressRef.current.value,
            totalAmount: totalAmount,
            items: items
        }

        fetch('https://food-app-server-nine.vercel.app/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Success message from the server
            })
            .catch((error) => {
                console.error('An error occurred while submitting the form:', error);
            });
    }
    
    return (

        <Modal onClick={props.onClick}>
            <form onSubmit={submitHandler}>
                <div>
                    <Input
                        label="Name"
                        ref={nameRef}
                        input={{
                            id: props.id,
                            type: 'text',
                            style:{width:'10rem'}
                        }} />
                    <Input
                        label="E-mail"
                        ref={emailRef}
                        input={{
                            id: props.id,
                            type: 'text',
                            style:{width:'10rem'}
                        }} />
                    <Input
                        label="Phone"
                        ref={phoneRef}
                        input={{
                            id: props.id,
                            type: "tel",
                            name: "phone",
                            placeholder: "Phone number",
                            style:{width:'10rem'}
                        }} />
                    <Input
                        label="Address"
                        ref={addressRef}
                        input={{
                            id: props.id,
                            type: 'text',
                            name: "address",
                            placeholder: "Address",
                            style:{width:'10rem'}
                        }} />
                </div>
                < div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div >
                <div className={classes.actions}>
                    <button className={classes['button-alt']} onClick={props.onClick}>Cancel</button>
                    <button type='submit' className={classes.button}>Confirm</button>
                </div>
            </form>
        </Modal>
    )

}

export default ConfirmOrder;
