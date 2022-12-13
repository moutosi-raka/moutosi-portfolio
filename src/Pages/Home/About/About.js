import React from 'react';
import graduction from '../../../assests/graduation.png'
import profile2 from '../../../assests/people2.png'

const About = () => {
    return (
        <div>
            <h1 className='text-3xl text-deep-green text-center font-bold mt-14 pb-4'>About Me</h1>
            <div className='w-60 mx-auto line mb-14'></div>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 my-12 gap-8'>
                <div className='card p-5 bg-light-green'>
                    <h1 className='text-2xl text-deep-green font-bold mb-4 text-center'>I am Moutosi Showrin Raka</h1>
                   <div className='flex justify-between items-center'>
                    <img className='w-40 h-40 pr-8' src={profile2} alt='' />
                   <p >I want to pursue a challenging and awarding career in the field of IT and be a part of progressive
                        organization that gives scope to enhance my knowledge and utilizing my potential towards the growth of
                        the organization.</p>
                   </div>
                </div>
                <div className='card p-5 bg-light-green'>
                    <h1  className='text-2xl text-deep-green font-bold mb-4 text-center'>Education</h1>
                    <div className='flex justify-between items-center'>
                        <img className='pr-8 w-40 h-40 ' src={graduction} alt='' />
                        <p>M.Eng.
                        Information & Communication
                        Engineering.
                        Noakhali Science and Technology
                        University.
                        2021-present</p>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default About;