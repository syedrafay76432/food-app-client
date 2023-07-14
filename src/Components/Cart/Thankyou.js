import Modal from '../UI/Modal';
import classes from './Cart.module.css'

const Thankyou = (props) => {
    const onClick = ()=>{
        props.onClick()
        window.location.reload()
    }
    return (
        <Modal onClick={props.onClick}>
            < div className={classes.total}>
                <span>Thank Yoy For Shoping</span>
            </div >
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={onClick}>Close</button>
            </div>
        </Modal>
    )
}
export default Thankyou;
