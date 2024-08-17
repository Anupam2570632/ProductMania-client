import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="relative bg-cover bg-center h-[80vh] rounded-md flex mx-auto items-center justify-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/953864/pexels-photo-953864.jpeg)' }}>
            <div className="absolute inset-0 bg-black bg-opacity-35 rounded-md text-center flex items-center justify-center flex-col text-white ">
                <h1 className="text-4xl md:text-6xl font-bold">Discover Your Next Favorite Product</h1>
                <p className="text-lg md:text-2xl my-4">Explore a wide range of products with the best deals.</p>
                <Link to={'/products'}>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold">Shop Now</button>
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;
