import React, { useContext } from 'react'
import { GrFormAdd } from 'react-icons/gr';
import { GrFormSubtract } from 'react-icons/gr';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import {ContextCart} from './Cart';

const Item = ({ id, src, alt, product, price, desc, Quantity}) => {

  const {deleteItem, increment, decrement} = useContext(ContextCart);

  return (
    <div>
      <div className="product-info">
                    <div className="item-img">
                        <img src={ src} alt="image"/>
                    </div>
                    <div className="item-details">
                        <h3>{product}</h3>
                        
                        <h4>{desc}</h4>
                    </div>
                    <div className="quantity">
                        <GrFormSubtract className='subtract-btn' onClick={() => decrement(id)}/>
                        <input type="text" placeholder={Quantity}></input> 
                        <GrFormAdd className='addition-btn' onClick={() => increment(id)} />                 
                    </div>
                    <div className="item-price">
                        <h4>{price}</h4>
                    </div>
                    <div className="save-later"><button className="save-later-btn">Save For Later</button></div>
                    <div className="delete-item">
                      <RiDeleteBin5Fill className='delete_btn' onClick={() => deleteItem(id)}/>
                    </div>
                </div>
                
                <hr />
    </div>
  )
}

export default Item
