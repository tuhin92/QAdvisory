import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

// TeamCard Component
const TeamCard = ({ image, name, role }) => {
    return (
        <div id='team' className="max-w-sm rounded-lg overflow-hidden shadow-lg border-2 border-yellow-200 bg-white">
            <div className="relative group">
                <img
                    className="w-full"
                    src={image}
                    alt={name}
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="space-x-4">
                        <SiGmail className='cursor-pointer h-6 w-6 text-white bg-[#a00d63] hover:text-[#a00d63] hover:bg-white p-2 rounded-btn' />
                        <FaFacebookF className='cursor-pointer h-6 w-6 text-white bg-[#a00d63] hover:text-[#a00d63] hover:bg-white p-2 rounded-btn' />
                        <FaTwitter className='cursor-pointer h-6 w-6 text-white bg-[#a00d63] hover:text-[#a00d63] hover:bg-white p-2 rounded-btn' />
                        <FaLinkedinIn className='cursor-pointer h-6 w-6 text-white bg-[#a00d63] hover:text-[#a00d63] hover:bg-white p-2 rounded-btn' />
                    </div>
                </div>
            </div>
            <div className="p-2 text-center">
                <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
                <p className="text-gray-600">{role}</p>
            </div>
        </div>
    );
};

// Main Team Component
const Team = () => {
    const teamMembers = [
        {
            image: "https://getmasum.com/themes-wp/greatway/wp-content/uploads/2017/02/1-2.jpg",
            name: "Myron J. Baxter",
            role: "Designer",
        },
        {
            image: "https://getmasum.com/themes-wp/greatway/wp-content/uploads/2017/02/4-1.jpg",
            name: "Joe S. Sloat",
            role: "Co Founder",
        },
        {
            image: "https://getmasum.com/themes-wp/greatway/wp-content/uploads/2017/02/3-2.jpg",
            name: "Keith W. Nelson",
            role: "CEO",
        },
        {
            image: "https://getmasum.com/themes-wp/greatway/wp-content/uploads/2017/02/2-2.jpg",
            name: "Ruth A. Neilsen",
            role: "Marketer",
        },
    ];

    return (
        <div className='mt-12 mx-5'>
            <h2 className='text-3xl text-center my-14'>
                OUR <span className='text-[#a00d63]'>EXPERTS</span>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {teamMembers.map(member => (
                    <TeamCard
                        key={member.name}
                        image={member.image}
                        name={member.name}
                        role={member.role}
                    />
                ))}
            </div>
        </div>
    );
};

export default Team;
