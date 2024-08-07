import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-400 text-base-content p-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-6 md:space-y-0">
                <aside className="text-center md:text-left">
                    <img className="h-30 w-48 mx-auto" src="https://i.ibb.co/TW1kgB4/photo-2024-07-15-23-25-24-removebg-preview.png" alt="QAdvisory Logo" />
                    <p className="mt-4">
                        QAdvisory Ltd.
                        <br />
                        Providing reliable support since 1992
                    </p>
                </aside>
                <nav className="text-center md:text-left">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover block mt-2">Consultancy</a>
                    <a className="link link-hover block mt-2">Finance</a>
                    <a className="link link-hover block mt-2">Advertising</a>
                    <a className="link link-hover block mt-2">Planning</a>
                    <a className="link link-hover block mt-2">Online Support</a>
                    <a className="link link-hover block mt-2">Super Ideas</a>
                </nav>
                <nav className="text-center md:text-left">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover block mt-2">About us</a>
                    <a className="link link-hover block mt-2">Contact</a>
                    <a className="link link-hover block mt-2">Jobs</a>
                    <a className="link link-hover block mt-2">Press kit</a>
                </nav>
                <nav className="text-center md:text-left">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover block mt-2">Terms of use</a>
                    <a className="link link-hover block mt-2">Privacy policy</a>
                    <a className="link link-hover block mt-2">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
