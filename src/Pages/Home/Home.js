import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Products from '../Products/Products';

const Home = () => {
    const [products, setProducts]= useState([])
    
    const handleClick=(products)=>{
        console.log(products)
    }
    useEffect(()=>{
        fetch("http://localhost:5000/products")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <Container>

<Row xs={1} md={2} lg={3} className="g-4">
      {
products.map(getProducts=> <Products
key={getProducts._id}
products={getProducts}
handleClick={handleClick}
></Products> )
      }
      </Row>

        </Container>
 
    );
};

export default Home;