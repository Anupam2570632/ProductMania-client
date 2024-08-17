import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const NavBar = () => {
    const { user, logOut, searchType, setSearchType, setSearch, search } = useContext(AuthContext)
    console.log(user)
    const navigate = useNavigate()

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/products'}>All Product</NavLink></li>
        <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
    </>

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.searchValue.value)
        navigate('/products')

    }

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div className='sticky top-0 z-20'>
            <div className="navbar bg-cyan-200 bg-opacity-75 rounded-full m-0 px-4 flex justify-between">
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
                            {
                                user ? <>

                                </> :
                                    <>
                                        <Link to={'/login'} className="text-white bg-blue-600 px-4 py-2 rounded-md font-bold">LogIn</Link>
                                        <Link to={'/register'} className="text-white bg-blue-600 px-4 py-2 rounded-md font-bold">SignUp</Link></>
                            }
                        </ul>
                    </div>
                    <Link to={'/'} className="text-xl md:text-3xl font-bold text-blue-600">Product<span className='text-red-600'>Mania</span></Link>
                </div>

                {/* search box div: on medium device */}
                <div className=' max-w-[300px] hidden md:flex lg:hidden items-end'>
                    <label className="input input-bordered flex items-center gap-2">
                        <form onSubmit={handleSearch}>
                            <input
                                type="text"
                                name='searchValue'
                                className="grow"
                                placeholder="Search products"
                                value={searchType}
                                onChange={(e) => setSearchType(e.target.value)}
                            />
                            <button type='submit'></button>
                        </form>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-5 w-5 opacity-80">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
                {/* // user profile image: on small and medium device  */}
                {
                    user && <div className="dropdown dropdown-end items-end lg:hidden">
                        <div tabIndex={0} role="button" className=" m-1">
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="dropdown-content card card-compact  text-primary-content z-[1]  p-2 shadow">
                            <div className="card-body bg-white">
                                <h1 className='text-gray-800 text-start py-2'>{user?.displayName}</h1>
                                <h1 className='text-gray-800 text-start py-2'>{user?.email}</h1>
                                <button onClick={handleLogOut} className='px-4 py-2 rounded-md bg-blue-500 text-white font-bold text-nowrap'>Log Out</button>
                            </div>
                        </div>
                    </div>
                }
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 items-center space-x-1">
                        {links}

                        {/* search box div: on large  device */}
                        <div className=' max-w-[300px] '>
                            <label className="input input-bordered flex items-center gap-2">
                                <form onSubmit={handleSearch}>
                                    <input
                                        type="text"
                                        name='searchValue'
                                        className="grow"
                                        placeholder="Search products"
                                        value={searchType}
                                        onChange={(e) => setSearchType(e.target.value)}
                                    />
                                    <button type='submit'></button>
                                </form>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-5 w-5 opacity-80">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />
                                </svg>
                            </label>
                        </div>
                    </ul>
                </div>
                <div className="navbar-end space-x-4 lg:flex hidden">
                    {
                        user ?
                            // user profile image 
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className=" m-1">
                                    <div className="avatar">
                                        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    tabIndex={0}
                                    className="dropdown-content card card-compact  text-primary-content z-[1]  p-2 shadow">
                                    <div className="card-body bg-white">
                                        <h1 className='text-gray-800 text-start py-2'>{user?.displayName}</h1>
                                        <h1 className='text-gray-800 text-start py-2'>{user?.email}</h1>
                                        <button onClick={handleLogOut} className='px-4 py-2 rounded-md bg-blue-500 text-white font-bold text-nowrap'>Log Out</button>
                                    </div>
                                </div>
                            </div>
                            :
                            <> <Link to={'/login'} className="text-white bg-blue-600 px-4 py-2 rounded-md font-bold">LogIn</Link>
                                <Link to={'/register'} className="text-white bg-blue-600 px-4 py-2 rounded-md font-bold">SignUp</Link>
                            </>
                    }
                </div>

            </div>

            {/* search box div: on small device */}
            <div className='flex items-center justify-center'>
                <div className='flex md:hidden py-6 bg-white bg-opacity-80'>
                    <label className="input input-bordered flex items-center gap-2">
                        <form onSubmit={handleSearch}>
                            <input
                                type="text"
                                name='searchValue'
                                className="grow"
                                placeholder="Search products"
                                value={searchType}
                                onChange={(e) => setSearchType(e.target.value)}
                            />
                            <button type='submit'></button>
                        </form>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-5 w-5 opacity-80">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div></div>
        </div>
    );
};

export default NavBar;