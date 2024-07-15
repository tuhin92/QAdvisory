import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
        <li><NavLink to='/' className="no-underline">Home</NavLink></li>
        <li><NavLink to='#about' className="no-underline">About</NavLink></li>
        <li><NavLink to='#service' className="no-underline">Service</NavLink></li>
        <li><NavLink to='#work' className="no-underline">Work</NavLink></li>
        <li><NavLink to='#team' className="no-underline">Team</NavLink></li>
        <li><NavLink to='#blog' className="no-underline">Blog</NavLink></li>
        <li><NavLink to='#pricing' className="no-underline">Pricing</NavLink></li>
        <li><NavLink to='#shop' className="no-underline">Shop</NavLink></li>
        <li><NavLink to='#contact' className="no-underline">Contact</NavLink></li>
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
                <a className="btn bg-[#790549] hover:bg-slate-400 text-white">Login</a>
            </div>
        </div>
    );
};

export default Navbar;