import React from 'react';
import img from '../../Image/404-error-page-found.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='notFound'>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;