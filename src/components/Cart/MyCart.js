import classes from './MyCart.module.css';
import Modal from '../UI/Modal';

const MyCart = (props) => {

    const items = [{id: 1, name: 'Paneer', amount: 5, price: 20}].map(i => (
        <li>{i.name}</li>
    ));

    return(
        <Modal>
            {items}
            <div>
                <span>Total price</span>
                <span>12</span>
            </div>
            <div>
                <button className={classes.close} onClick={props.onClose}>Close</button>
                <button className={classes.order}>Order</button>
            </div>
        </Modal>
    )
}

export default MyCart;