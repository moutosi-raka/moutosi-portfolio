import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Projectpage = () => {
    const project = useLoaderData();
  const {img, name , feature, technology, coverImg} = project;
  console.log(project)
    return (
        <div>
             <div > 
                <h1 className='text-3xl text-center my-8'>{name}</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 my-12 gap-8 w-11/12 mx-auto'>
                            <div>
                                <img src={coverImg} alt='' />
                            </div>
                            <div>
                                <h4>Featuer</h4>
                                <ul>
                                    {/* {
                                        feature.map((fea, i) => <li key={i + 1}>{i + 1}. {fea}</li>)
                                    } */}
                                </ul>  
                                    <div className='my-8 flex justify-center'>
                                        <button className="btn btn-outline mr-6">Live Link</   button>
                                        <button className="btn btn-outline mr-6">Github(Client)</button>
                                        <button className="btn btn-outline">Github(Server)</button>
                                    </div>
                                    <ul className='flex mr-3'>
                                {/* {
                                    technology.map((tec,i) => <li className='' key={i+1}>{tec}</li>)
                                } */}
                            </ul>
                            </div>
                        </div>
                        <div className=''>
                          
                        </div>
                    </div>
        </div>
    );
};

export default Projectpage;