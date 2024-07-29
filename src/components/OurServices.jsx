import React from 'react';
import { FaRegLightbulb, FaRegMoneyBillAlt } from 'react-icons/fa';
import { HiSpeakerphone } from 'react-icons/hi';
import { LuBrainCircuit } from 'react-icons/lu';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { SiConsul } from "react-icons/si";

const OurServices = () => {
    return (
        <div id='service' className='bg-gray-200 my-12 p-4'>
            <h2 className='text-3xl text-center'>OUR <span className='text-[#a00d63]'>SERVICE</span></h2>

            <div className='max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center'>
                {/* card-1  */}
                <div className="card bg-white text-primary-content w-96 transition-transform transform hover:-scale-x-105 shadow-lg hover:shadow-2xl hover:translate-y-2">
                    <div className="card-body">
                        <div className='text-center'>
                            <SiConsul size={45} />
                        </div>
                        <h2 className="text-center">CONSULTANCY</h2>
                        <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, reprehenderit assumenda saepe sequi inventore laudantium cumque? Harum voluptatem esse quisquam.</p>
                    </div>
                </div>

                {/* card-2  */}
                <div className="card bg-white text-primary-content w-96 transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl hover:translate-y-2">
                    <div className="card-body">
                        <div className='text-center'>
                            <FaRegMoneyBillAlt size={45} />
                        </div>
                        <h2 className="text-center">FINANCE</h2>
                        <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, reprehenderit assumenda saepe sequi inventore laudantium cumque? Harum voluptatem esse quisquam.</p>
                    </div>
                </div>

                {/* card-3  */}
                <div className="card bg-white text-primary-content w-96 transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl hover:translate-y-2">
                    <div className="card-body">
                        <div className='text-center'>
                            <HiSpeakerphone size={45} />
                        </div>
                        <h2 className="text-center">ADVERTISING</h2>
                        <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, reprehenderit assumenda saepe sequi inventore laudantium cumque? Harum voluptatem esse quisquam.</p>
                    </div>
                </div>

                {/* card-4  */}
                <div className="card bg-white text-primary-content w-96 transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl hover:translate-y-2">
                    <div className="card-body">
                        <div className='text-center'>
                            <FaRegLightbulb size={45} />
                        </div>
                        <h2 className="text-center">PLANING</h2>
                        <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, reprehenderit assumenda saepe sequi inventore laudantium cumque? Harum voluptatem esse quisquam.</p>
                    </div>
                </div>

                {/* card-5  */}
                <div className="card bg-white text-primary-content w-96 transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl hover:translate-y-2">
                    <div className="card-body">
                        <div className='text-center'>
                            <MdOutlineSupportAgent size={45} />
                        </div>
                        <h2 className="text-center">ONLINE SUPPORT</h2>
                        <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, reprehenderit assumenda saepe sequi inventore laudantium cumque? Harum voluptatem esse quisquam.</p>
                    </div>
                </div>

                {/* card-6  */}
                <div className="card bg-white text-primary-content w-96 transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl hover:translate-y-2">
                    <div className="card-body">
                        <div className='text-center'>
                            <LuBrainCircuit size={45} />
                        </div>
                        <h2 className="text-center">SUPER IDEAS</h2>
                        <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, reprehenderit assumenda saepe sequi inventore laudantium cumque? Harum voluptatem esse quisquam.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
