import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { Navbar, Nav, Container } from "react-bootstrap";
import {motion} from 'framer-motion'

const Header = () => {

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const linkStyle1 ={
        color: "#a4b494", backgroundColor: '#3b5249', height:'100%', width: '33.3%', textAlign: 'center'  , fontFamily: 'Playfair Display'
    }
    const linkStyle2 ={
        color: "black", backgroundColor: '#a4b494', height:'100%', width: '33.3%', textAlign: 'center'   , fontFamily: 'Playfair Display'
    }
    const linkStyle3 ={
        color: "#a4b494", backgroundColor: '#519872', height:'100%', width: '33.3%', textAlign: 'center', fontFamily: 'Playfair Display'
    }
  return (
    <header style={{height: '100%'}}>
      <Navbar
        style={{ backgroundColor: "#382933", flexDirection: 'column'  }}
        
        
      >
        <Link  to='/'>
          <Navbar.Brand
          
          style={{ color: "#a4b494", fontSize: '35px', fontFamily: 'Playfair Display', maxidth: '70%',  }} >
            <motion.div
            initial={{x: -550}}
            animate={{x: 50}}
            transition={{delay: 1.5, duration: 1.5}}
            >
                OSFOW LIVING</motion.div>
          </Navbar.Brand>
          </Link>

          


          <Navbar style={{color: '', width: '100%'}} id="basic-navbar-nav">

            <Nav style={{ width: '100%'}} className="ml-auto">
                <Link style={linkStyle1} to='/department'>
              <Nav.Link  style={{fontSize: '2vw', color: "#a4b494"}} ><div className='Link-mobile'>Department<i  className="fas fa-building"></i></div>
                 </Nav.Link>
              </Link>


              <Link style={linkStyle2} to='/cart'>
              <Nav.Link  style={{fontSize: '2vw', color:'#382933'}} >
               <div className='Link-mobile'>Cart <i style={{paddingLeft: '3%'}} className="fas fa-cart-plus"></i></div> 
              </Nav.Link>
              </Link>


              <Link to='/login' style={linkStyle3}>
              <Nav.Link  href='/'  style={{fontSize: '2vw', color:'#382933'}}>
             <div className='Link-mobile'>Sign In<i className="far fa-user"></i></div>   
                </Nav.Link>
              </Link>


            </Nav>
          </Navbar>
        
      </Navbar>
    </header>
  );
};

export default Header;
