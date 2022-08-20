import Slider from 'react-slick'
import { Component } from 'react'
import img1 from './1.png'
import img2 from './2.jpg'
import img3 from './3.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default class MainSlider extends Component {
    render(){
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoSlide:true
          };

        return (
            <div className="main-autoSlide">
                <Slider {...settings}>
                    <div className="slide-items">
                        <img src={img1} alt="" />
                    </div>
                    <div className="slide-items">
                        <img src={img2} alt="" />
                    </div>
                    <div className="slide-items">
                        <img src={img3} alt="" />
                    </div>
                </Slider>
            </div>
        )
    }
}
