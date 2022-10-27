import React from 'react';
import { Link } from 'react-router-dom';
import notFound from "../../assets/images/not found/download.png"

const NotFound = () => {
    return (
        <div>
            <h1 className='text-center'>Sorry page not found</h1>
            <img className='w-75 ms-5 ps-5 mb-5' src={notFound} alt="" />
            <br />
            <Link to="/">Go to home</Link>
        </div>
    );
};

export default NotFound;