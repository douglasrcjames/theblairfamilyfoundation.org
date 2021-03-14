import React, { Component } from 'react'
import Slider from "react-slick";
import {partners} from './partners.js'
export default class PartnersSlider extends Component {
    
    render() {
        if(!partners){
            return(
                <div className="center-text">Loading...</div>
            )
        } else {
            return (
                <Slider {...settings1}>
                    {shuffle(partners).map((partner, index) => (
                        <div key={index}>
                            <a 
                                href={partner.webUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                >        
                                <img
                                    className={`responsive ${partner.picSize}`}
                                    alt="partner logo"
                                    src={partner.picPath}
                                    />
                            </a>
                        </div>
                        ))}
                </Slider>
                
            )
        }
        
    }
}

const settings1 = {
    dots: false,
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: true,
    initialSlide: 0,
    variableWidth: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    swipeToSlide: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
  };


  export function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

