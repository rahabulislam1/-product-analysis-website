import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <CustomLink className='customLink' to='/'>Home</CustomLink>
            <CustomLink className='customLink' to='/reviews'>Reviews</CustomLink>
            <CustomLink className='customLink' to='/dashboard'>Dashboard</CustomLink>
            <CustomLink className='customLink' to='/blogs'>Blogs</CustomLink>
            <CustomLink className='customLink' to='/about'>About</CustomLink>
        </nav>
    );
};

export default Header;