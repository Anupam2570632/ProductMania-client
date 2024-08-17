import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';
import CallToAction from '../components/CallToAction';
import HeroSection from '../components/Hero';

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <FeaturedProducts/>
            <CallToAction/>
        </div>
    );
};

export default Home;