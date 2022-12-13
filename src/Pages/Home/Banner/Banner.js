import React from 'react';
import profile1 from '../../../assests/profile1.webp'
import profile2 from '../../../assests/unnamed.webp'

const Banner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-5/6 mx-auto my-12'>
            <div className='flex items-center p-16'>
                <p>How to customize daisyUI? daisyUI components come with many variants necessary for design systems and you won't usually need to customize anything. But you can still customize components in many ways.</p>
            </div>
            <div>
                <img className='w-1/2 rounded-full ring-primary ring ring-offset-base-100 ring-offset-2' src={profile1} alt='' />
            </div>
        </div>
    );
};

export default Banner;