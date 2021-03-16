import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../action/userActions'
import './Header2.css'

const Header2 = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    const logoutHandler =( ) =>{
        dispatch(logout())
      }
  
    return (
        <div className='header'>
            <div className='nav-home-section'>Osfow Smart</div>
            <div className='nav-link-section'>
                <div className='department'>Department</div>
                <div className='cart'>Cart</div>
                <div className='sign-in'>Sign In</div>
            </div>
         
        </div>
    )
}

export default Header2
