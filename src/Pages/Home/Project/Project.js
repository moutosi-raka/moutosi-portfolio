import React, { useEffect, useState } from 'react';
import ProjectCart from './ProjectCart';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './project.css'


const Project = () => {
  const [projects, setProjects] = useState([])
   
    useEffect( ()=>{
      fetch('http://localhost:5000/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
    },[])
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        speed: 500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            }
          ]
    };
    return (
        <div>
            <h1 className='text-3xl text-deep-green text-center font-bold mt-14 pb-2 text-hover'>My Project</h1>
            <div className='w-60 mx-auto line mb-14'></div>
            <div className="pt-8 mb-20">
               <div className=' w-11/12 mx-auto'>
               <Slider {...settings}>
                  {
                    projects.map(project => 
                      <ProjectCart
                      key={project.id}
                      project={project}
                      ></ProjectCart>
                  )
                  }
                   
                </Slider>
               </div>
            </div>
        </div>
    );
};

export default Project;