import React, { useState } from 'react';
import SwiperSlider from './SwiperSlider';

const ManualProgressBar = ({ value, label }) => {
    return (
        <div className="my-4">
            <div className="flex justify-between mb-1">
                <span>{label}</span>
                <span>{value}%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                    className="bg-[#a00d63] h-2 rounded-full"
                    style={{ width: `${value}%` }}
                ></div>
            </div>
        </div>
    );
};

const About = () => {
    const [progressValues] = useState([
        { label: 'DESIGN', value: 40 },
        { label: 'DEVELOPMENT', value: 20 },
        { label: 'MARKETING', value: 60 },
        { label: 'PHOTOGRAPHY', value: 80 },
    ]);

    return (
        <div id='about' className='my-12'>
            <h2 className='text-3xl font-semibold text-center'>WHO WE <span className='text-[#a00d63]'>ARE</span></h2>

            <div className='flex flex-col md:flex-row justify-around'>
                <div className='w-full md:w-1/2 pr-8'>
                    <h2 className='text-2xl font-semibold'>A Little Brief About Us</h2>
                    <p className='mt-4 text-gray-500'>
                        At QAdvisory, we specialize in providing top-notch consultancy, finance, advertising, and planning services. Our mission is to support businesses with innovative online solutions and super ideas that drive growth and success. With a team of experienced professionals, we offer personalized strategies that cater to the unique needs of each client. <br /> <br /> Our commitment to excellence and our passion for innovation make us a trusted partner for businesses seeking to enhance their operations and achieve their goals.
                    </p>
                    <button className="btn bg-[#a00d63] text-white hover:bg-slate-400">More About</button>
                </div>

                <div className='w-full md:w-1/2'>
                    {progressValues.map((progress, index) => (
                        <ManualProgressBar key={index} value={progress.value} label={progress.label} />
                    ))}
                </div>
            </div>



            {/* why chose us  */}
            {/* <div className='my-12'>
                <h2 className='text-3xl text-center'>WHY <span className='text-[#a00d63]'>CHOOSE</span> US</h2>
                <div className='flex justify-evenly'>
                    <div className='mt-24'>
                        <SwiperSlider></SwiperSlider>
                    </div>
                    <div>
                        <img className='h-[85%]' src="https://i.ibb.co/Lrn49zf/happy-attractive-woman-having-fun-pointing-fingers-up-dancing-carefree-smiling-upbeat-standing-again.png" alt="" />
                    </div>
                </div>
            </div> */}
            <div>
                <h2 className='text-3xl text-center'>WHY <span className='text-[#a00d63]'>CHOOSE</span> US</h2>

                <div className="hero bg-base-200 -mt-12">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img
                            src="https://i.ibb.co/Lrn49zf/happy-attractive-woman-having-fun-pointing-fingers-up-dancing-carefree-smiling-upbeat-standing-again.png"
                            className="max-w-sm " />
                        <div className='flex justify-between'>
                            <div className='mt-24'>
                                <SwiperSlider></SwiperSlider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
