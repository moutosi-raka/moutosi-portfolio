import React from 'react';
import ProjectCart from './ProjectCart';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import book from '../../../assests/project/Book_bazar.PNG'
import beauty from '../../../assests/project/beauty-zone.PNG'
import learning from '../../../assests/project/Learning.PNG'
import './project.css'


const Project = () => {
    const projects = [
        {
            id: 1,
            name: 'Book Bazar',
            img: book,
            details: 'It is a platform on which anyone can buy and sell old and new books.',
            route: '/book-bazar',
            link: 'https://book-bazar-76341.firebaseapp.com/'
        },
        {
            id: 2,
            name: 'Beauty Zone',
            img:  beauty,
            details: 'A services website where clients can add their valuable',
            route: '/beauty',
            link: 'https://beauty-parlour-cd243.firebaseapp.com/'
        },
        {
            id: 3,
            name: 'Learning',
            img:    learning,
            details: 'Website about online courses for sell and purchase',
            route: '/learning',
            link: 'https://learning-a98c7.firebaseapp.com/'
        }
    ]
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