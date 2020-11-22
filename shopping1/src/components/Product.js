import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'

const Product = ({product}) => {
const  cardStyle ={
    margin: '2% 2%',
    padding: '15%',
    borderRadius: '50%, 50%',
    fontFamily: 'Playfair Display',
    color: '#519872'

}

    return (
        <motion.div
        whileHover={{ scale: 1.1  }}
            whileTap={{ scale: 0.4,  borderRadius: "100%" }}>
            <Card style={cardStyle} className="product-card"
            
            >
                <Link to={`/product/${product.id}`}>
                    <Card.Img src={product.image} variant='top' />
                </Link>
                <Card.Body>
                <Link to={`/product/${product.id}`}>   
                    <Card.Title style={{color: '#519872', fontFamily: 'Playfair Display'}} as='div'><strong>{product.name}</strong>
                    </Card.Title>
                 </Link>   

                 <Card.Text style={{letterSpacing: '2px'}} as ='div'>
                     <Rating  value={product.rating} text={`${product.numReviews}-reviews`}  />
                 </Card.Text>

                 <Card.Text style={{marginTop: '2%'}} as='h3'>{product.price}</Card.Text>
                </Card.Body> 
            
            </Card>
        </motion.div>
    )
}

export default Product
