import './main.css'
import React from 'react'
import img from '../../assets/pexels-lukas-669615.jpg'
import Footer from '../Footer/Footer'
import MainSlider from '../Parts/Slider/Slider'
export default function Main() {
  return (
    <div className="main">
        <div className="main-container">
          <div className="main-slider">
            <div className="main-slider-container">
                <MainSlider/>
            </div>
          </div>
          
        </div>
        <Footer/>
    </div>
  )
}
