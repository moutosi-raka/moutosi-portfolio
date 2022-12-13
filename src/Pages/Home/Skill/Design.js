import React from 'react';
import monitor from '../../../assests/monitor1.png'
import html from '../../../assests/design icon/html.png'
import css from '../../../assests/design icon/css-3.png'
import bootstrap from '../../../assests/design icon/bootstrap2-48.png'
import tailwindcss from '../../../assests/design icon/tailwind-css-icon.png'
import figma from '../../../assests/design icon/figma.png'


const Design = () => {
    return (
        <div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 bg-deep-green card-hover">

                    <img src={monitor} alt='' className='w-40' />
                    <h2 className="text-2xl font-semibold leading-tight tracking-wide">Design</h2>
                    <p className="flex-1 text-center ">I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                    <p className=" py-3 font-semibold  text-xl text-center">Technology I Used For Design</p>
                    <div className='flex'>
                        <img className='w-12 pr-2' src={html} alt=''/>
                        <img className='w-12 pr-2' src={css} alt=''/>
                        <img className='w-12 pr-2' src={bootstrap} alt=''/>
                        <img className='w-8' src={tailwindcss} alt=''/>
                    </div>
                    <p className=" py-3 font-semibold  text-xl text-center">Tools I Used For Design</p>
                    <div>
                    <img className='w-8' src={figma} alt=''/>
                    </div>
                </div>
    );
};

export default Design;