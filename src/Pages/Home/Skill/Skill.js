import React from 'react';
import BackEnd from './BackEnd';
import Design from './Design';
import Develop from './Develop';

const Skill = () => {
    return (
        <div className="rounded-md w-11/12 mx-auto my-8 bg-light-green py-2">
            <h1 className='text-3xl text-deep-green text-center font-bold mt-14 pb-2 text-hover'>Skills</h1>
            <div className='w-60 mx-auto line mb-14'></div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-7 text-white'>
                <Design></Design>
                <Develop></Develop>
                <BackEnd></BackEnd>
            </div>
        </div>
    );
};

export default Skill;