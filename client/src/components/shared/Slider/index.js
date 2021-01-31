import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './styles.module.css';
import {responsive, imagesBanner} from '../../../mocks/mainData'

const MyCarousel = () => {
    
  
    return (
        <Carousel
        responsive={responsive} 
        autoPlaySpeed={3000}
        autoPlay
        transitionDuration={3000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop", "mobile"]}
        itemClass="carousel-item-padding-40-px"
        showDots
    
    >
        {
            imagesBanner.map((i)=>{
                return(
                    <div className={i.className}>
                        <div className={styles.bgImg}>
                        <p>{i.text}</p>

                        </div>
                    </div>

                )
            })
        }
        
      
      </Carousel>
    );
  };
  
  export default MyCarousel;