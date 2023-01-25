import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state,action) => {
    if(action.type === 'ADD_ITEM_TO_CART'){
        const updatedItems = state.items.concat(action.item);
        const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
        return{
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }
    return defaultCartState;
}

const CartProvider = props => {

    const [cartState,dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD_ITEM_TO_CART',item: item} )
    };
    const removeItemFomCartHandler = id => {
        dispatchCartAction({type: 'REMOVE_ITEM_FROM_CART',id: id} )
    };

    const CartContextHelper = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFomCartHandler
    };

    return(
        <CartContext.Provider value = {CartContextHelper}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;