import React from 'react'
import './LandingPage.css'
import {Link} from 'react-router-dom'
import smartring from '../img/smartring.jpg'
import smartring2 from '../img/smartring2.png'
import smartring3 from '../img/smartring3.png'
import smartglasses from '../img/smartglasses.png'
import smartbody2 from '../img/smartbody2.png'
import smartwatch from '../img/smartwatch.png'
import smartwatchfix from '../img/smartwatchfix.png'
import smartshoes1 from '../img/smartshoe1.png'


const LandingPage = () => {
    return (
        <div className='landing-container'>
            <div className='main-landing'>

            
            <div className='main-left'>
            <h1 className='main-left-title'>You,<br></br> Just Smarter</h1>
            <h2 className='main-left-body'>We have everything you need to get started<br></br>
            on your very own smart life-style<br></br>
            From Glasses to rings and everything in-between
            </h2>

            <Link to='/'><button className='main-left-button'>Shop Now</button></Link>
            </div>
            <div className='main-right'>
                <div className='main-right-left'>
                    <div className='smart-body'>
                <img src={smartbody2} alt='smart glasses'></img>
            </div>
                </div>
            <div className='main-right-right'>
                <div className='smart-watch'>
                <img src={smartwatchfix} alt='smart watch'></img>
            </div>
                <div className='smart-ring'>
                <img src={smartring3} alt='smart ring'></img>
            </div>
            <div className='smart-glasses'>
                <img src={smartglasses} alt='smart glasses'></img>
            </div> 
            <div className='smart-shoes'>
                <img src={smartshoes1} alt='smart shoews'></img>
            </div> 
            </div>
            
           

            </div>
            </div>
            
        </div>
    )
}

export default LandingPage
