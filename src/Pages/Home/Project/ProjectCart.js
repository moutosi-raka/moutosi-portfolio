import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCart = ({project}) => {
    const {name, img, link, details} = project;
    return (
        <div
         className="card shadow-md h-[420px] bg-deep-green text-white ">
        <figure><img className='h-60 w-full'  src={img} alt="Shoes" /></figure>
        <div className="p-8 ">
            <div className=''>
                <h1 className='text-2xl text-center font-bold'>
                    {name}</h1>
                <p className='text-center'>{details}</p>    
            </div>
            <div className='flex justify-center mt-2'>
                <button>
                <Link className='btn btn-outline btn-warning' >See Details</Link>
                </button>   
            </div>
        </div>
    </div>
    );
};

export default ProjectCart;