import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
        <li><a href='#home' className="no-underline">Home</a></li>
        <li><a href='#about' className="no-underline">About</a></li>
        <li><a href='#service' className="no-underline">Service</a></li>
        <li><a href='#work' className="no-underline">Work</a></li>
        <li><a href='#team' className="no-underline">Team</a></li>
        <li><a href='#blog' className="no-underline">Blog</a></li>
        <li><a href='#pricing' className="no-underline">Pricing</a></li>
        <li><NavLink href='#shop' className="no-underline">Shop</NavLink></li>
        <li><a href='#contact' className="no-underline">Contact</a></li>
    </>
    return (
        <div className="navbar max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img className='h-20 w-40 mb-4' src="https://i.ibb.co/TW1kgB4/photo-2024-07-15-23-25-24-removebg-preview.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#a00d63] hover:bg-slate-400 text-white">Login</a>
            </div>
        </div>
    );
};

export default Navbar;