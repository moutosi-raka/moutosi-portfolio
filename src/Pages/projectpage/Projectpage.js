import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProjectSlider from './ProjectSlider';



const Projectpage = () => {
    const project = useLoaderData();
  const {img, client, server, link, name , feature, technology, coverImg} = project;
 
    return (
        <div>
             <div > 
                <h1 className='text-3xl text-center my-8 font-bold'>{name}</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 my-12 gap-8 w-11/12 mx-auto'>
                            <div>
                             <ProjectSlider
                             img={img}
                             ></ProjectSlider>
                            </div>
                            <div className='ml-12'>
                                <h4 className='text-2xl font-bold mb-2'>Featuer</h4>
                                <ul>
                                    {
                                        feature.map((fea, i) => <li  className='block' key={i + 1}>{i + 1}. {fea}</li>)
                                    }
                                </ul>  
                                    <h4 className='text-2xl font-bold mt-8 mb-2'>Technology</h4>
                                <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mr-3'>
                               
                                {
                                    technology.map((tec,i) => <li className='mr-8' key={i+1}>{tec}</li>)
                                }
                            </ul>
                            </div>
                        </div>
                        <div className=''>
                        <div className='my-8 flex justify-center'>
                                        <button className="btn btn-outline mr-6"><a href={link}rel="noreferrer" target="_blank">Live Link</a></   button>
                                        <button className="btn btn-outline mr-6"><a href={client} rel="noreferrer" target="_blank">Github(Client)</a></button>
                                        <button className="btn btn-outline"><a href={server} rel="noreferrer" target="_blank">Github(server)</a></button>
                                    </div>
                        </div>
                    </div>
        </div>
    );
};

export default Projectpage;