import React, { useContext } from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import "./Nav.css";
import CartContext from '../../context/cart/CartContext';
const MyNavBar = () => {
  const {cartItems, showHideCart}= useContext(CartContext)
    return (
        <div>
             <Navbar bg="dark" variant="dard" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className="text-light navigates" to="/">Home</NavLink>
            <NavLink className="text-light ps-5 navigates" to="/admin">Dashboard</NavLink>
            <NavLink className="text-light ps-5 navigates" to="/addproduct">Add Product</NavLink>
          </Nav>
          <Form className="d-flex">
         <div className='icon-shop'>
       <Link to="/cart"> <i className="fa-solid fa-cart-shopping fa-2x shopp"
         ></i></Link>
         </div>
         {cartItems.length > 0 && (
            <div className='item__count'>
              <span>{cartItems.length}</span>
            </div>
          )}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default MyNavBar;