import React from 'react';
import { IoCheckmarkCircle } from "react-icons/io5";
import { SiCodepen } from "react-icons/si";
import { FaAward, FaCircleUser  } from "react-icons/fa6";

const ProjectHistory = () => {
    return (
        <div className='bg-gray-200 my-12 py-12'>
            <div className='max-w-7xl mx-auto flex justify-between'>
                {/* 1st */}
                <div className='flex items-center justify-between gap-4 '> 
                    <IoCheckmarkCircle className='h-10 w-10 md:h-14 md:w-14'></IoCheckmarkCircle>
                    <div>
                        <h2 className='text-xl md:text-3xl font-bold'>2500</h2>
                        <p className='font-bold text-xs md:text-base -mt-4 text-gray-700'>PROJECT FINISHED</p>
                    </div>
                </div>

                {/* 2nd  */}
                <div className='flex items-center justify-between gap-4 '> 
                    <SiCodepen  className='h-10 w-10 md:h-14 md:w-14'></SiCodepen >
                    <div>
                        <h2 className='text-xl md:text-3xl font-bold'>28254</h2>
                        <p className='font-bold text-xs md:text-base -mt-4 text-gray-700'>LINE OF CODING</p>
                    </div>
                </div>

                {/* 3rd  */}
                <div className='flex items-center justify-between gap-4 '> 
                    <FaAward  className='h-10 w-10 md:h-14 md:w-14'></FaAward >
                    <div>
                        <h2 className='text-xl md:text-3xl font-bold'>1296</h2>
                        <p className='font-bold text-xs md:text-base -mt-4 text-gray-700'>AWARD WON</p>
                    </div>
                </div>

                {/* 4th  */}
                <div className='flex items-center justify-between gap-4 '> 
                    <FaCircleUser  className='h-10 w-10 md:h-14 md:w-14'></FaCircleUser >
                    <div>
                        <h2 className='text-xl md:text-3xl font-bold'>1876</h2>
                        <p className='font-bold text-xs md:text-base -mt-4 text-gray-700'>SATISFIED CLIENT</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectHistory;