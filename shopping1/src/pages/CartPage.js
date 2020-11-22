import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, ListGroup, Image, From, Button,Card} from 'react-bootstrap'
import Message from '../components/Message'
import {addToCart} from '../action/cartActions'

const CartPage = ({match, location, history}) => {
    const productId = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]):1

    const dispatch = useDispatch()

    useEffect(()=>{
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
        
    },[dispatch, productId, qty])
    
  
    return (
        <div>
            CArt
        </div>
    )
}

export default CartPage
