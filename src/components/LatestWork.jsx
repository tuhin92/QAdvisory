import React, { useState } from 'react';
import '../styles.css';

const LatestWork = () => {
    const [showAll, setShowAll] = useState(false);

    const cards = [
        {
            src: "https://i.postimg.cc/90fdZyT8/pexels-fonok-403495.jpg",
            alt: "Photography",
            text: "Photography"
        },
        {
            src: "https://img.freepik.com/free-photo/women-s-day-still-life-with-makeup-jewelry_23-2149263199.jpg",
            alt: "Branding",
            text: "Branding"
        },
        {
            src: "https://img.freepik.com/free-vector/pink-lotion-gel-cream-brand-cosmetic-ad_23-2148455395.jpg",
            alt: "Marketing",
            text: "Product Marketing"
        },
        {
            src: "https://img.freepik.com/free-vector/isometric-seo-landing-page-template_52683-16245.jpg",
            alt: "Seo",
            text: "Landing page SEO"
        },
        {
            src: "https://img.freepik.com/free-psd/travel-tourism-instagram-post-social-media-post-template_106176-2406.jpg",
            alt: "Advertising",
            text: "Advertising"
        },
        {
            src: "https://img.freepik.com/free-psd/food-social-media-promotion-instagram-banner-post-design-template_202595-312.jpg",
            alt: "Advertising",
            text: "Advertising"
        },
        {
            src: "https://img.freepik.com/premium-photo/person-is-writing-calendar-with-wordthe-wordon-it_946757-3179.jpg",
            alt: "Planning",
            text: "Planning"
        },
        {
            src: "https://img.freepik.com/free-photo/portrait-woman-customer-service-worker_144627-37977.jpg",
            alt: "Support",
            text: "Online Support"
        }
    ];

    const visibleCards = showAll ? cards : cards.slice(0, 6);

    return (
        <div id='work'>
            <h2 className='text-3xl text-center my-12'>LATEST <span className='text-[#a00d63]'>WORKS</span></h2>

            <div className='mx-5 grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center'>
                {visibleCards.map((card, index) => (
                    <div key={index} className="card bg-base-100 w-96 h-64 shadow-xl">
                        <img className='h-full w-full rounded-2xl' src={card.src} alt={card.alt} />
                        <div className="card-overlay">
                            <div className="card-text">{card.text}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='text-center mt-6'>
                {!showAll ? (
                    <button className='btn bg-[#a00d63] hover:bg-slate-400 text-white' onClick={() => setShowAll(true)}>
                        Show All
                    </button>
                ) : (
                    <button className='btn bg-[#a00d63] hover:bg-slate-400 text-white' onClick={() => setShowAll(false)}>
                        Show Less
                    </button>
                )}
            </div>
        </div>
    );
};

export default LatestWork;
