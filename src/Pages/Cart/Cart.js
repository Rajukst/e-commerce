import React, { useContext } from 'react';
import CartContext from '../../context/cart/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {showCart, showHideCart, cartItems}= useContext(CartContext)
    let initialAmount = 0;
    let productCount = '';
    for (let newAmount of cartItems) {
        initialAmount = initialAmount + parseInt(newAmount.price);
        productCount = productCount + newAmount.name;
    }

    return (
        <div className="shop">
        {showCart && (
          <div className='cart__wrapper'>
            <div style={{ textAlign: "right" }}>
              <i
                style={{ cursor: "pointer" }}
                className='fa fa-times-circle'
                aria-hidden='true'
                onClick={showHideCart}
              ></i>
            </div>
            <div className='cart__innerWrapper'>
              {cartItems.length === 0 ? (
                <h4>Cart is Empty</h4>
              ) : (
                <ul>
                  {cartItems.map((getSingleId) => (
                    <CartItem
                    key={getSingleId._id}
                    singleItem={getSingleId}
                    ></CartItem>
                  ))}
                </ul>
              )}
            </div>
            <div className='Cart__cartTotal'>
              <div>Cart Total</div>
              <div></div>
              <div style={{ marginLeft: 5 }}>
                {initialAmount}
              </div>
            </div>
          </div>
        )}
      </div>
    );
};

export default Cart;