import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ProductView = () => {
    const {id}= useParams()
    const [viewProduct, setViewProduct] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${id}`)
        .then(res=>res.json())
        .then(data=>setViewProduct(data))
    },[])
    return (
        <div>
           <Container>
            <div className="productBody">
                <img className='img-fluid' src={viewProduct.image} alt="" />
                <h3>{viewProduct.name}</h3>
                <h5>Price: ${viewProduct.priceOne}</h5>
                <p>{viewProduct.description}</p>
            </div>
            <button><Link to="/">Back To Home</Link></button>
           </Container>
        </div>
    );
};

export default ProductView;