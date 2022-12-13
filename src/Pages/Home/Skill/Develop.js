import React from 'react';
import code from '../../../assests/coding.png'
import js from '../../../assests/front icon/java-script.png'
import rs from '../../../assests/front icon/physics.png'
import firebase from '../../../assests/front icon/icons8-google-firebase-console-48.png'
import vs from '../../../assests/front icon/visual-studio.png'
import github from '../../../assests/front icon/icons8-github-75.png'
import netlify from '../../../assests/front icon/netlify.png'

const Develop = () => {
    return (
        <div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 bg-deep-green card-hover">

        <img src={code} alt='' className='w-40' />
        <h2 className="text-2xl font-semibold leading-tight tracking-wide">Develop</h2>
        <p className="flex-1 text-center ">I like to code things from source, and enjoy bringing ideas to life in the browser.</p>
        <p className=" py-3 font-semibold  text-xl text-center">Technology I Used For Develope</p>
        <div className='flex'>
                        <img className='w-12 pr-2' src={js} alt=''/>
                        <img className='w-12 pr-2' src={rs} alt=''/>
                        <img className='w-12 pr-2' src={firebase} alt=''/>
                    </div>
                    <p className=" py-3 font-semibold  text-xl text-center">Tools I Used For Develope</p>
                    <div className='flex'>
                    <img className='w-12 pr-2' src={github} alt=''/>
                    <img className='w-12 pr-2' src={vs} alt=''/>
                    <img className='w-12 pr-2' src={netlify} alt=''/>
                    </div>
    </div>
    );
};

export default Develop;