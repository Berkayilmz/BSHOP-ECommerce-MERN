import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import ProductItem from "../components/ProductItem.jsx";
import axios from 'axios';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const fetcProducts = async () => {
      const {data} = await axios.get('/api/products');
      setProducts(data);
    }

    fetcProducts();
  });

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
