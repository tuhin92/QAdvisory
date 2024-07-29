import React from 'react';
import '../styles.css';

const LatestWork = () => {
    return (
        <div>
            <h2 className='text-3xl text-center my-12'>LATEST <span className='text-[#a00d63]'>WORKS</span></h2>

            <div className='mx-5 grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center'>
                {/* card 1 */}
                <div className="card bg-base-100 w-96 h-64 shadow-xl">
                    <img className='h-full w-full rounded-2xl'
                        src="https://i.postimg.cc/90fdZyT8/pexels-fonok-403495.jpg"
                        alt="Shoes" />
                    <div className="card-overlay">
                        <div className="card-text">Phorography</div>
                    </div>
                </div>

                {/* card 2  */}
                <div className="card bg-base-100 w-96 h-64 shadow-xl">
                    <img className='h-full w-full rounded-2xl'
                        src="https://img.freepik.com/free-photo/women-s-day-still-life-with-makeup-jewelry_23-2149263199.jpg?t=st=1722269729~exp=1722273329~hmac=e58b51f1b96f2513abcd83569b916f2fbc963c9610e7fe452556ec9695037b85&w=996"
                        alt="Branding" />
                    <div className="card-overlay">
                        <div className="card-text">Branding</div>
                    </div>
                </div>

                {/* card 3  */}
                <div className="card bg-base-100 w-96 h-64 shadow-xl">
                    <img className='h-full w-full rounded-2xl'
                        src="https://img.freepik.com/free-vector/pink-lotion-gel-cream-brand-cosmetic-ad_23-2148455395.jpg?t=st=1722269677~exp=1722273277~hmac=c6eab0147d0e1d9cc149c25c61a83374ef18862023ebf7684831782416eb3bf3&w=996"
                        alt="Marketing" />
                    <div className="card-overlay">
                        <div className="card-text">Product Marketing</div>
                    </div>
                </div>

                {/* card 4  */}
                <div className="card bg-base-100 w-96 h-64 shadow-xl">
                    <img className='h-full w-full rounded-2xl'
                        src="https://img.freepik.com/free-vector/isometric-seo-landing-page-template_52683-16245.jpg?t=st=1722270122~exp=1722273722~hmac=4e4431452be4464929314799134fe20fdcd8c3348ff6f6ef2fd2c676e1deb050&w=996"
                        alt="Seo" />
                    <div className="card-overlay">
                        <div className="card-text">Landing page SEO</div>
                    </div>
                </div>

                {/* card 5  */}
                <div className="card bg-base-100 w-96 h-64 shadow-xl">
                    <img className='h-full w-full rounded-2xl'
                        src="https://img.freepik.com/free-psd/travel-tourism-instagram-post-social-media-post-template_106176-2406.jpg?t=st=1722270142~exp=1722273742~hmac=eb153942a21e0aca9e25264cb195ec5b5b1c24d56099a490244f0bb5fbff381b&w=740"
                        alt="Advertising" />
                    <div className="card-overlay">
                        <div className="card-text">Advertising</div>
                    </div>
                </div>

                {/* card 6  */}
                <div className="card bg-base-100 w-96 h-64 shadow-xl">
                    <img className='h-full w-full rounded-2xl'
                        src="https://img.freepik.com/free-psd/food-social-media-promotion-instagram-banner-post-design-template_202595-312.jpg?t=st=1722270520~exp=1722274120~hmac=ed62add88d8bbb407880d2822304b84816ea8a6038bcce059163fe23530b4232&w=740"
                        alt="Advertising" />
                    <div className="card-overlay">
                        <div className="card-text">Advertising</div>
                    </div>
                </div>

                {/* card 7  */}
                <div className="card bg-base-100 w-96 h-64 shadow-xl">
                    <img className='h-full w-full rounded-2xl'
                        src="https://img.freepik.com/premium-photo/person-is-writing-calendar-with-wordthe-wordon-it_946757-3179.jpg?w=826"
                        alt="Planning" />
                    <div className="card-overlay">
                        <div className="card-text">Planning</div>
                    </div>
                </div>

                {/* card 8  */}
                <div className="card bg-base-100 w-96 h-64 shadow-xl">
                    <img className='h-full w-full rounded-2xl'
                        src="https://img.freepik.com/free-photo/portrait-woman-customer-service-worker_144627-37977.jpg?t=st=1722272616~exp=1722276216~hmac=9cfdab7042f0ae8e7f24dc81ac234e7973796265613e44c6c23641a9e3945337&w=996"
                        alt="Support" />
                    <div className="card-overlay">
                        <div className="card-text">Online Support</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestWork;
