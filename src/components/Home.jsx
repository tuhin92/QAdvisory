import React from 'react';
import Banner from './Banner';
import About from './About';
import OurServices from './OurServices';

const Home = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Banner></Banner>
                <About></About>
            </div>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;