import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

    const links =<>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/products'}>All Product</NavLink></li>
    <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="text-3xl font-bold text-blue-600">Product<span className='text-red-600'>Mania</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {links}
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                <button className="text-white bg-blue-600 px-4 py-2 rounded-md font-bold">LogIn</button>
                <button className="text-white bg-blue-600 px-4 py-2 rounded-md font-bold">SignUp</button>
            </div>
        </div>
    );
};

export default NavBar;