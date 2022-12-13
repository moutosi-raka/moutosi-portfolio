import React from 'react';
import database from '../../../assests/database-storage.png'
import node from '../../../assests/back end/NodeJS (1).png'
import ex from '../../../assests/back end/express-js-icon.png'
import mongo from '../../../assests/back end/mongo.png'
import verael from '../../../assests/back end/versel.png'

const BackEnd = () => {
    return (
        <div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 bg-deep-green card-hover">

        <img src={database} alt='' className='w-40' />
        <h2 className="text-2xl font-semibold leading-tight tracking-wide">Back End</h2>
        <p className="flex-1 text-center ">I like to use backend for creating API's, store data, web application logic and secure web-application.</p>
        <p className=" py-3 font-semibold  text-xl text-center">Technology I Used For BackEnd</p>
        <div className='flex'>
                        <img className='w-12 pr-2' src={node} alt=''/>
                        <img className='w-12 pr-2' src={ex} alt=''/>
                        <img className='w-12 pr-2' src={mongo} alt=''/>
                    </div>
                    <p className=" py-3 font-semibold  text-xl text-center">Tools I Used For BackEnd</p>
                    <div className='flex'>
                    <img className='w-20 pr-2' src={verael} alt=''/>
                    
                    </div>
    </div>
    );
};

export default BackEnd;