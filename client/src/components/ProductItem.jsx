import React from 'react'
import { Card } from 'react-bootstrap'

const ProductItem = ({product}) => {
  return (
    <>
        <Card className='my-3 py-3 rounded'>
            <a href={`/product/${product.id}`}>
                <Card.Img src={product.image} variant="top"/>
            </a>

            <Card.Body>
            <a href={`/product/${product.id}`}>
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
            </a>
            </Card.Body>

            <Card.Text as="h3">
                ${product.price}
            </Card.Text>

        </Card>
    </>
  )
}

export default ProductItem