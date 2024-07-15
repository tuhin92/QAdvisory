import React from 'react';

const Footer = () => {
    return (
        <footer className="footer w-auto bg-slate-400 text-base-content p-10">
            <aside>
                <img className='h-30 w-48' src="https://i.ibb.co/TW1kgB4/photo-2024-07-15-23-25-24-removebg-preview.png" alt="" />
                <p className='text-center'>
                    QAdvisory Ltd.
                    <br />
                    Providing reliable support since 1992
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Consultancy</a>
                <a className="link link-hover">Finance</a>
                <a className="link link-hover">Advertising</a>
                <a className="link link-hover">Planning</a>
                <a className="link link-hover">Online Support</a>
                <a className="link link-hover">Supper Ideas</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;