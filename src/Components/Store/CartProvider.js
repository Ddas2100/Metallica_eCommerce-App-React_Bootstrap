import { useReducer } from "react";
import CartContext from "./CartContext";

let initialCartState = {items: [], totalAmount: 0};
const cartReducer= (state, action) => {
    if (action.type === 'GET_CART') {
        const initialTotalAmount = action.cartItems.reduce(
          (accPrice, item) => accPrice + item.price,
          0
        );
    
        return { items: action.cartItems, totalAmount: initialTotalAmount };
    }
    if (action.type === 'ADD_TO_CART') {
        const updatedTotalAmount = state.totalAmount + action.item.price;
        const updatedItems = state.items.concat(action.item);
        return { items: updatedItems, totalAmount: updatedTotalAmount };
    }
    if (action.type === 'REMOVE_FROM_CART') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => action.id === item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount + existingCartItem.price;
        const updatedItems = state.items.filter((item) => item.id !== action.id);
        return { items: updatedItems, totalAmount: updatedTotalAmount };
    }
    if (action.type === 'ORDER') {
        return { items: [], totalAmount: 0 };
    }
    return state;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialCartState);

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
    };

    return (
        <CartContext.Provider value={cartContext}>
          {props.children}
        </CartContext.Provider>
      );
};

export default CartProvider;