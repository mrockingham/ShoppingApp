import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'
import './Product.css'

const Product = ({product}) => {
const  cardStyle ={
    margin: '2% 2%',
    padding: '15%',
    borderRadius: '50%, 50%',
    // border: 'none',
    fontFamily: 'Libre Baskerville',
    color: 'white',
    backdropFilter: 'blur(0px)',
    backgroundColor: 'rgba(248, 246, 248, 0.3)'

}

    return (
        <motion.div
        // whileHover={{ scale: 1.1  }}
        //     whileTap={{ scale: 0.4,  borderRadius: "100%" }}
            >
            <div  className="product-card"
            
            >
                <Link to={`/product/${product.id}`}>
                    <Card.Img src={product.image} variant='top' />
                </Link>
                <div className='product-body'>
                <Link to={`/product/${product.id}`}>   
                    <div  className='product-title'><strong>{product.name}</strong>
                    </div>
                 </Link>   

                 <div className='product-text' style={{letterSpacing: '2px'}} as ='div'>
                     <Rating  value={product.rating} text={`${product.numReviews}-Reviews`}  />
                 </div>

                 <Card.Text style={{marginTop: '2%'}} as='h3'>{product.price}</Card.Text>
                </div> 
            
            </div>
        </motion.div>
    )
}

export default Product
