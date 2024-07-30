import React from 'react';
import Banner from './Banner';
import About from './About';
import OurServices from './OurServices';
import LatestWork from './LatestWork';
import ProjectHistory from './ProjectHistory';

const Home = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Banner></Banner>
                <About></About>
            </div>
            <OurServices></OurServices>
            <div className='max-w-7xl mx-auto'>
                <LatestWork></LatestWork>
            </div>
            <ProjectHistory></ProjectHistory>
        </div>
    );
};

export default Home;