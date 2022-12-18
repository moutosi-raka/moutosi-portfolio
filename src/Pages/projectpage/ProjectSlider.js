import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const ProjectSlider = ({img}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
             <Slider {...settings}
               >
              {
                img.map((image, i)=>   <div 
                className='w-11/13 h-[230px] object-cover'
                key={i+1}>
                <img  src={image} alt='' />
              </div>)
              }
              </Slider>
        </div>
    );
};

export default ProjectSlider;