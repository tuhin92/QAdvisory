import React, { useState, useEffect } from 'react';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 2; // Update this if you add more slides

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === totalSlides ? 1 : prevSlide + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [totalSlides]);

    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className={`carousel-item relative w-full ${currentSlide === 1 ? 'block' : 'hidden'}`}>
                <div className="relative w-full h-full bg-slate-950 rounded-xl overflow-hidden">
                    <img src='https://i.ibb.co/989TcmY/pexels-sora-shimazaki-5673488.jpg' className="w-full h-full object-cover rounded-xl opacity-75" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                        <div className="absolute inset-0 flex items-center pl-12">
                            <div className="text-white space-y-7 w-1/2">
                                <h2 className="text-6xl font-bold">Navigating Your Path to Success</h2>
                                <p>
                                    There Are Many Variations Of Passages Of Available, But The
                                    Majority Have Suffered Alteration In Some Form
                                </p>

                                <div className="flex gap-4">
                                    <button className="btn bg-[#a00d63] hover:bg-slate-400 border-none text-white">
                                        Discover More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide2" className="btn btn-circle mr-5" onClick={() => setCurrentSlide(2)}>
                        ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle" onClick={() => setCurrentSlide(2)}>
                        ❯
                    </a>
                </div>
            </div>

            <div id="slide2" className={`carousel-item relative w-full ${currentSlide === 2 ? 'block' : 'hidden'}`}>
                <div className="relative w-full h-full bg-slate-950 rounded-xl overflow-hidden">
                    <img src='https://i.ibb.co/P1xcCpD/pexels-yankrukov-7793699.jpg' className="w-full h-full object-cover rounded-xl opacity-75" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                        <div className="absolute inset-0 flex items-center pl-12">
                            <div className="text-white space-y-7 w-1/2">
                                <h2 className="text-6xl font-bold">Empowering Your Business with Innovative Solutions</h2>
                                <p>
                                    There Are Many Variations Of Passages Of Available, But The
                                    Majority Have Suffered Alteration In Some Form
                                </p>

                                <div className="flex gap-4">
                                    <button className="btn bg-[#a00d63] hover:bg-slate-400 border-none text-white">
                                        Discover More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide1" className="btn btn-circle mr-5" onClick={() => setCurrentSlide(1)}>
                        ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle" onClick={() => setCurrentSlide(1)}>
                        ❯
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
