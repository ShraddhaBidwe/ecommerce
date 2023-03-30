import React from "react";
import './Cart.css';
import { CgShoppingCart } from 'react-icons/cg';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';




const Cart = () => {

    return(
        <div className="main-page">
        <div className="header">
        <a href="/continue shopping"><h4>Continue Shopping</h4></a>
            <div className="cart-icon"><button><CgShoppingCart /></button></div>
        </div>
        <hr />
        <div className="address">
            <p>Deliver to: <b>Pune-411043</b></p>
            <button className="change-btn">Change</button>
        </div>
        <hr />
        <div className="cart-section">
            <h2>Shopping Cart</h2>
            <div className="shopped-items">
                <div className="items-container">
                    <div className="product-info">
                    <div className="item-img">
                        <img src="https://m.media-amazon.com/images/I/41IcuNkyrdL._SX300_SY300_QL70_FMwebp_.jpg" alt="image"/>
                    </div>
                    <div className="item-details">
                        <h3>Samsung M04</h3>
                    </div>
                    <div className="quantity">
                        <button><AiOutlineMinus /></button>
                        <input type="text" placeholder="1"></input> 
                        <button><AiOutlinePlus /></button>                 
                    </div>
                    <div className="item-price">
                        <h4>₹4000</h4>
                    </div>
                    <div className="save-later"><button className="save-later-btn">Save For Later</button></div>
                    <div className="delete-item"><RiDeleteBin5Fill /></div>
                </div>
                
                <hr />
                <div className="product-info">
                    <div className="item-img">
                        <img src="https://m.media-amazon.com/images/I/718XDEWTPIL._UL1500_.jpg" alt="image"/>
                    </div>
                    <div className="item-details">
                        <h3>Samsung M04</h3>
                    </div>
                    <div className="quantity">
                        <button><AiOutlineMinus /></button>
                        <input type="text" placeholder="1"></input> 
                        <button><AiOutlinePlus /></button>                 
                    </div>
                    <div className="item-price">
                        <h4>₹2000</h4>
                    </div>
                    <div className="save-later"><button className="save-later-btn">Save For Later</button></div>
                    <div className="delete-item"><RiDeleteBin5Fill /></div>
                </div>
                <hr />
                <div className="product-info">
                    <div className="item-img">
                        <img src="https://m.media-amazon.com/images/I/31NVItwqOnL._SX300_SY300_QL70_FMwebp_.jpg" alt="image"/>
                    </div>
                    <div className="item-details">
                        <h3>Samsung M04</h3>
                    </div>
                    <div className="quantity">
                        <button><AiOutlineMinus /></button>
                        <input type="text" placeholder="1"></input> 
                        <button><AiOutlinePlus /></button>                 
                    </div>
                    <div className="item-price">
                        <h4>₹4000</h4>
                    </div>
                    <div className="save-later"><button className="save-later-btn">Save For Later</button></div>
                    <div className="delete-item"><RiDeleteBin5Fill /></div>
                </div>
                <hr />
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