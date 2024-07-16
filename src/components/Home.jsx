import React from 'react';
import Banner from './Banner';
import About from './About';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;