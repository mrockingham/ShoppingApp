import React, { useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import {listProducts} from '../action/productActions'

import Products from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'

import {motion} from 'framer-motion'

const HomePage = () => {
    const dispatch = useDispatch()
    
    const productList = useSelector(state => state.productList)
    const{ error, products, loading} = productList

    useEffect(()=>{
       dispatch(listProducts())
        
    },[dispatch])

  
    return (
        <>
        <motion.h1
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1.5}}
        style={{fontFamily: 'Playfair Display'}}>Latest Products</motion.h1>
        {loading ? (<Loader />) : error ? (<Message variant ='danger'>{error}</Message>
        ) :(
            <Row>
                {products.map(product=>(
                    <Col key={product._id} sm={12} md={6} lg={4}>
                        <Products product={product} />
                    </Col>
                ))}
            </Row>
        )}
            
        </>
    )
}

export default HomePage
