import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";

const Contact = () => {
    return (
        <div id='contact' className='max-w-7xl mx-auto'>
            <h2 className='mt-12 text-center text-3xl'>CONNECT <span className='text-[#a00d63]'>WITH US</span></h2>

            {/* parent div */}
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {/* left div */}
                <div className='w-full lg:w-1/2 pr-4'>
                    <h2 className='text-2xl font-bold mb-4'>CONTACT INFO</h2>
                    <p className='mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit quisquam illum tempora necessitatibus nemo tempore.</p>

                    {/* location */}
                    <div className='flex items-center gap-4 my-2'>
                        <FaLocationDot className='h-6 w-6 text-white p-2 rounded-full bg-[#a00d63]'></FaLocationDot>
                        <div className='text-base'>2369 Robinson Lane Jackson, OH 45640</div>
                    </div>

                    {/* phone */}
                    <div className='flex items-center gap-4 my-2'>
                        <FaPhone className='h-6 w-6 text-white p-2 rounded-full bg-[#a00d63]'></FaPhone>
                        <div className='text-base'>+123 456 7890</div>
                    </div>

                    {/* mail */}
                    <div className='flex items-center gap-4 my-2'>
                        <MdMail className='h-6 w-6 text-white p-2 rounded-full bg-[#a00d63]'></MdMail>
                        <div className='text-base'>info@example.com</div>
                    </div>

                    {/* time */}
                    <div className='flex items-center gap-4'>
                        <IoTimeSharp className='h-6 w-6 text-white p-2 rounded-full bg-[#a00d63]'></IoTimeSharp>
                        <div className='text-base'>Mon - Fri: 9am - 5pm</div>
                    </div>
                </div>

                {/* right div */}
                <div className='w-full lg:w-1/2 pl-4'>
                    <div className="p-6 rounded">
                        <form className="w-full max-w-lg mx-auto">
                            {/* Name Field */}
                            <div className="mb-4">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Your Name"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="mb-4">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Your Email"
                                />
                            </div>

                            {/* Message Field */}
                            <div className="mb-6">
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="message"
                                    rows="5"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="flex items-center justify-center">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
