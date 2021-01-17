import React from 'react';
import {BrowserRouter as Router, Route, } from 'react-router-dom'

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {Container} from 'react-bootstrap'
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import bimg from '../src/img/4076394.jpg'
import bimg2 from '../src/img/26584.jpg'
import bimg3 from '../src/img/90824.jpg'
import bimg4 from '../src/img/3623843.jpg'
import LoginScreen from './pages/LoginScreen';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <Router>
      <Header/>
    < div className='app' style={{backgroundImage: `url(${bimg2})`, backgroundPosition: 'center'}}>
    
    <main className='py-3'>
      <Container>
        
        <Route  path='/login' component={LoginScreen}/>
        <Route  path='/register' component={RegisterPage}/>
        <Route  path='/product/:id' component={ProductPage}/>
        <Route  path='/cart/:id?' component={CartPage}/>
        
        <Route  path='/' component={HomePage} exact/>
      </Container>
      </main>
      
    <Footer />
    </ div>
    </Router>
  );
}

export default App;
