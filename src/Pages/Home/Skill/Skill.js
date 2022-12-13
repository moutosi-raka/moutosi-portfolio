import React from 'react';
import monitor from '../../../assests/monitor1.png'
import code from '../../../assests/coding.png'
import database from '../../../assests/database-storage.png'

const Skill = () => {
    return (
        <div className="rounded-md w-11/12 mx-auto my-8 bg-light-green py-2">
            <h1 className='text-3xl text-deep-green text-center font-bold mt-14 pb-2'>Skills</h1>
            <div className='w-60 mx-auto line mb-14'></div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-7 text-white'>
                <div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 bg-deep-green">

                    <img src={monitor} alt='' className='w-40' />
                    <h2 className="text-2xl font-semibold leading-tight tracking-wide">Quis vel eros donec ac odio tempor.</h2>
                    <p className="flex-1 text-center ">Tempora ipsa quod magnam non, dolores nemo optio. Praesentium soluta maiores non itaque aliquam sint.</p>
                    <button type="button" className="px-8 py-3 font-semibold rounded-full">Start recycling</button>
                </div>
                <div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 bg-deep-green">

                    <img src={code} alt='' className='w-40' />
                    <h2 className="text-2xl font-semibold leading-tight tracking-wide">Quis vel eros donec ac odio tempor.</h2>
                    <p className="flex-1 text-center ">Tempora ipsa quod magnam non, dolores nemo optio. Praesentium soluta maiores non itaque aliquam sint.</p>
                    <button type="button" className="px-8 py-3 font-semibold rounded-full">Start recycling</button>
                </div>
                <div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 bg-deep-green">

                    <img src={database} alt='' className='w-40' />
                    <h2 className="text-2xl font-semibold leading-tight tracking-wide">Quis vel eros donec ac odio tempor.</h2>
                    <p className="flex-1 text-center ">Tempora ipsa quod magnam non, dolores nemo optio. Praesentium soluta maiores non itaque aliquam sint.</p>
                    <button type="button" className="px-8 py-3 font-semibold rounded-full">Start recycling</button>
                </div>
            </div>
        </div>
    );
};

export default Skill;