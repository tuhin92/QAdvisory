import React from 'react';

const Subscribe = () => {
    return (
        <div className='mt-20'>
            <div
                className="hero min-h-[70%]"
                style={{
                    backgroundImage: "url(https://media.istockphoto.com/id/2000663010/photo/smiling-young-indian-woman-browsing-her-smartphone-while-relaxing-on-couch.jpg?s=2048x2048&w=is&k=20&c=IHobWIsGW4aASelwkTVR0156-4LKzNd9BF-fKZ_oxV4=)",
                }}>
                <div className="hero-overlay bg-gray-800 bg-opacity-50"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <h4 className="mb-5 text-xl text-white">Subscribe to get the latest news, update and offer information. Let's connect with us.</h4>
                        <input type="email" placeholder="Enter your Email" className="input input-bordered w-96" required /><br />
                        <button className="mt-6 btn border-none bg-[#a00d63] text-white hover:bg-white hover:text-[#a00d63] px-6">SUBSCRIBE</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Subscribe;
