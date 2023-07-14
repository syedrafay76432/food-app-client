import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClick}></div>
}
const ModalOvelay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portalElement)}
            {ReactDOM.createPortal(<ModalOvelay onClick={props.onClick}>{props.children}</ModalOvelay>, portalElement)}
        </>
    )

}

export default Modal;