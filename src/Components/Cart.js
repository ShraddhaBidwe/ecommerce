import React,{createContext, useReducer} from "react";
import { data } from "./Data"; 
import './Cart.css';
import CartContext from "./CartContext";
import {reducer } from "./Reducer";
// import { initialState } from "react-use-cart";

export const ContextCart = createContext();

const initialState = {
    item: data,
    totalAmount: 0,
    totalItem: 0,
};

const Cart = () => {

    // const [item, setItem] = useState(data);

    const [state, dispatch] = useReducer(reducer, initialState)

// To delete individual item from shopping cart
    const deleteItem = (id) => {
        return dispatch(
            {
                type: "Delete_Item",
                payload: id,
            }
        );
    };

// Incrementing individual Element 

    const increment =(id) => {
        return dispatch({
            type: "Increment",
            payload: id,
        });
    };

// decrementing individual Element 

const decrement =(id) => {
    return dispatch({
        type: "Decrement",
        payload: id,
    });
};


    return(
        <>
        <ContextCart.Provider value={{...state, deleteItem, increment, decrement}}>
        <CartContext />
        </ContextCart.Provider>
        </>
        
    );
};
export default Cart;
