import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import img from '../../Image/raspberry-pi.jpg';
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews();
    let ThreeReviews = [];
    let rest;
    rest = reviews.filter(review => review.id % 2 === 0)
    ThreeReviews = [...rest];
    let navigate = useNavigate();

    return (
        <div>
            <div className='product-container'>
                <div className='product-details'>
                    <h2>Buy Your Products</h2>
                    <h2><span className='product-name'>Raspberry Pi 4 Model B</span></h2>
                    <p>The speed and performance of the new Raspberry Pi 4 is a step up from earlier models. For the first time, we've built a complete desktop experience. Whether you're editing documents, browsing the web with a bunch of tabs open, juggling spreadsheets or drafting a presentation, you'll find the experience smooth and very recognisable — but on a smaller, more energy-efficient and much more cost-effective machine.</p>
                    <button className='All-btn' onClick={() => navigate("*")}>Demo</button>
                </div>
                <div className='product-image'>
                    <img src={img} alt="" />
                </div>
            </div>
            <div className='reviews'>
                <h1 className='review'>Customer Review ({ThreeReviews.length})</h1>
                <div className='reviews-container'>
                    {
                        ThreeReviews.map(review2 => <Review key={review2.id} review={review2}></Review>)
                    }
                </div>
            </div>
            <div className='seeAllReview-btn'>
                <button className='All-btn' onClick={() => navigate("/reviews")}><strong>See All Reviews</strong></button>
            </div>
        </div>
    );
};

export default Home;