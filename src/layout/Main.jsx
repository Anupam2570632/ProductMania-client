import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../shared/NavBar';
import Footer from '../shared/Footer';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
            <ToastContainer/>
        </div>
    );
};

export default Main;