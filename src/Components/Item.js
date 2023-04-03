import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';

const Item = () => {
  return (
    <div>
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
    </div>
  )
}

export default Item
