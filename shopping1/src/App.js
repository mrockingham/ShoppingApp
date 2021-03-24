import React from 'react';
import {BrowserRouter as Router, Route, } from 'react-router-dom'

import './App.css';
import Footer from './components/Footer';

import {Container} from 'react-bootstrap'
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import bimg from '../src/img/4076394.jpg'
import bimg2 from '../src/img/26584.jpg'
import bimg3 from '../src/img/90824.jpg'
import bimg4 from '../src/img/3623843.jpg'
import lux1 from '../src/img/lux1.jpg'
import lux2 from '../src/img/lux2.jpg'
import lux3 from '../src/img/lux3.jpg'
import lux4 from '../src/img/lux4.jpg'
import lux5 from '../src/img/lux5.jpg'
import LoginScreen from './pages/LoginScreen';
import RegisterPage from './pages/RegisterPage';
import ProfileScreen from './pages/ProfilePage';
import ShippingPage from './pages/ShippingPage';
import Header2 from './components/Header2';
import LandingPage from './pages/LandingPage';


const App = () => {
  return (
    <Router>
     < div className='app' style={{backgroundImage: `url(${lux4})`, backgroundPosition: 'center'}}> 
     <div className='app-container'>

     
     
         
    <Header2/> 
   
    <main className='main-container'>
      
        
        <Route  path='/login' component={LoginScreen}/>
        
        <Route  path='/register' component={RegisterPage}/>
        <Route  path='/profile' component={ProfileScreen}/>
        <Route  path='/shipping' component={ShippingPage}/>
        <Route  path='/product/:id' component={ProductPage}/>
        <Route  path='/cart' component={CartPage}/>
        <Route  path='/landing' component={LandingPage}/>
        
        <Route  path='/' component={HomePage} exact/>
      
      </main>
      
    <Footer />
    </div>
    </ div>
    </Router>
  );
}

export default App;
