import React, { useContext} from 'react';
import Item from "./Item";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { CgShoppingCart } from 'react-icons/cg';
import { BiArrowBack} from 'react-icons/bi';
import {ContextCart} from './Cart';

const CartContext = () => {

    const {item, totalItem, totalAmount} = useContext(ContextCart);

  return (
    <div>
      <div className="main-page">
        <div className="header">
            <div>
            <BiArrowBack className="backarrow" />
            <h4>Continue Shopping</h4>
            </div>
            <div className="header-cart-icon">
               <CgShoppingCart  className="cart-icon"/>
               <p>{totalItem}</p>
            </div>
        </div>
        <hr />
        
        <div className="cart-section">
            <h2>Shopping Cart</h2>
            <p>Total Items in Cart: <span>{totalItem}</span>{" "}</p>
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
            <h4>Total Amount : <span>₹{totalAmount}</span></h4>
            <button className="place-order-btn"><h2>Place Order</h2></button>
        </div>
        </div>
    </div>
  );
};

export default CartContext;
