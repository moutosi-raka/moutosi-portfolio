import React from 'react';
import profile1 from '../../../assests/profile1.webp'


const Banner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 w-5/6 mx-auto py-12'>
            <div className='flex items-center py-0 lg:py-16 justify-center lg:justify-start '>
              <div>
                <h1 className='text-5xl text-deep-green font-extrabold'>Hello I'm a<br/>
                full-stack developer
                </h1>
              </div>
            </div>
            <div className='lg:mt-0 mt-16 flex justify-center lg:justify-start '>
                <img className='w-1/2 rounded-full ring-primary ring ring-offset-base-100 ring-offset-2' src={profile1} alt='' />
            </div>
        </div>
    );
};

export default Banner;