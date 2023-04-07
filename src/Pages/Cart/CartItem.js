import React, { useContext } from 'react';
import CartContext from '../../context/cart/CartContext';
import "./CartItem.css"
const CartItem = ({ singleItem}) => {
    console.log(singleItem)
    const {removeItem, cartItems}= useContext(CartContext)
 
    return (
        <li className='CartItem__item'>
        <div>
       {singleItem.name}
        </div>
        <button className='CartItem__button' onClick={() => removeItem(singleItem._id)}>
          Remove
        </button>
      </li>
    );
};

export default CartItem;