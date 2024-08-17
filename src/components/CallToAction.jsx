import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <div className="py-16 bg-cyan-300 rounded-md text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg mb-6">Sign up for exclusive offers and updates</p>
            <Link to={'/register'}>
            <button className="bg-red-500 px-6 py-3 rounded-full text-lg font-semibold">Sign Up Now</button>
            </Link>
        </div>
    );
};

export default CallToAction;
