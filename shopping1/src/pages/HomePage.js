import React, { useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './HomePage.css'
import { Row, Col } from 'react-bootstrap'
import {listProducts} from '../action/productActions'
import './HomePage.css'

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
        <div className='Home-title'
            >Latest Products</div>
        {loading ? (<Loader />) : error ? (<Message variant ='danger'>{error}</Message>
        ) :(
            <Row > 
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
