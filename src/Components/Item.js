import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';

const Item = ({src, alt, product, price, desc}) => {
  return (
    <div>
      <div className="product-info">
                    <div className="item-img">
                        <img src={ src} alt="image"/>
                    </div>
                    <div className="item-details">
                        <h3>{product}</h3>
                        <h3>{price}</h3>
                        <h4>{desc}</h4>
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
