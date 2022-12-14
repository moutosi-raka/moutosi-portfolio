import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Project from '../Project/Project';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <About></About>
           <Skill></Skill>
           <Project></Project>
        </div>
    );
};

export default Home;