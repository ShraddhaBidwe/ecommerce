import React,{useState} from "react";
import { data } from "./Data"; 
import './Cart.css';
import Item from "./Item";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { CgShoppingCart } from 'react-icons/cg';
import { BiArrowBack} from 'react-icons/bi';



const Cart = () => {

    const [item, setItem] = useState(data);


    return(
        <div className="main-page">
        <div className="header">
            <div>
            <BiArrowBack className="backarrow" />
            <h4>Continue Shopping</h4>
            </div>
            <div>
               <CgShoppingCart  className="cart-icon"/>
            </div>
        </div>
        <hr />
        
        <div className="cart-section">
            <h2>Shopping Cart</h2>
            <div className="shopped-items">
                <div className="items-container">
                <Scrollbars>
                    {
                        item.map((curItem) => {
                            return <Item  key={curItem.id} {...curItem}/>
                        })
                    }
                    
                </Scrollbars>

                </div>
            </div>
        </div>
        <div className="total">
            <h4>Total Amount : ₹10000</h4>
            <button className="place-order-btn"><h2>Place Order</h2></button>
        </div>
        </div>
        
    )
}
export default Cart;
