import React from 'react';
import flower from '../../../assests/icons8-flower-doodle-96.png'

const About = () => {
    return (
        <div>
        <h1 className='text-3xl text-deep-green text-center font-bold my-12'>About Me</h1>
            <div className="flex flex-col w-11/12 mx-auto lg:flex-row my-12">
                <div className="grid flex-grow h-32 card bg-light-green rounded-box place-items-center">content</div>

                <div className="divider lg:divider-horizontal"><img src={flower} alt='' /></div>
                <div className="grid flex-grow h-32 card bg-light-green rounded-box place-items-center">content</div>
            </div>

        </div>
    );
};

export default About;