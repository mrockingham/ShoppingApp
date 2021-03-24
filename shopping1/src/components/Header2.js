import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { NavDropdown } from "react-bootstrap";
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
            <div className='nav-home-section'>

            <Link to='/landing' style={{textDecoration:'none'}} > 
            <div className='home'>
                Osfow Smart
                </div>
            </Link>
                
                </div>
            <div className='nav-link-section'>
               <Link style={{textDecoration:'none'}} ><div className='department'>Department</div></Link> 


                <Link to ='/cart' style={{textDecoration:'none'}} ><div className='cart'>Cart</div></Link>

                {userInfo ? (
                <NavDropdown title={userInfo.userName} id='username'>
                    <NavDropdown.Item>
                <Link style={{textDecoration:'none'}} > 
                    <div className='profile'>Profile</div>
                </Link>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={logoutHandler}>Log Out</NavDropdown.Item>
                </NavDropdown>
                ):
              ( <Link to='/login' style={{textDecoration:'none'}} > <div className='sign-in'>Sign In</div></Link>)
            }



            </div>
         
        </div>
    )
}

export default Header2
