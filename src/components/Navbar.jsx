import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const links = (
        <>
            <li>
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="no-underline cursor-pointer"
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="no-underline cursor-pointer"
                >
                    About
                </Link>
            </li>
            <li>
                <Link
                    to="service"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="no-underline cursor-pointer"
                >
                    Service
                </Link>
            </li>
            <li>
                <Link
                    to="work"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="no-underline cursor-pointer"
                >
                    Work
                </Link>
            </li>
            <li>
                <Link
                    to="team"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="no-underline cursor-pointer"
                >
                    Team
                </Link>
            </li>
            <li>
                <Link
                    to="pricing"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="no-underline cursor-pointer"
                >
                    Pricing
                </Link>
            </li>
            <li>
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="no-underline cursor-pointer"
                >
                    Contact
                </Link>
            </li>
        </>
    );

    return (
        <div className={`lg:sticky lg:top-0 lg:z-50 transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-base-200'}`}>
            <div className='navbar max-w-7xl mx-auto'>
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
                    <img className='h-20 w-40 mb-4' src="https://i.ibb.co/TW1kgB4/photo-2024-07-15-23-25-24-removebg-preview.png" alt="Logo" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <NavLink to='/login' className="btn bg-[#a00d63] hover:bg-slate-400 text-white">Login</NavLink>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;
