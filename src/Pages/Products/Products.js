import React, { useContext } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Products.css"
import CartContext from '../../context/cart/CartContext';

const Products = ({products}) => {
  const {addToCart}= useContext(CartContext)
    const {_id,name,priceOne,image,description }= products;
   
    return (
        <div className='pt-4'>
            <Col>
            <Card>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>${priceOne}</Card.Title>
                <Card.Text>
                 {description.slice(0, 100)}
                </Card.Text>
              </Card.Body>
              <div className="buttons">
             <div className="viewBtn">
             <Link to={`/product/${_id}`}><button>View</button></Link>
             </div>
            <div className="cartBtn">
            <button onClick={()=>addToCart(products)}>Add to Cart</button>
            </div>
              </div>
            </Card>
          </Col>
        </div>
    );
};

export default Products;