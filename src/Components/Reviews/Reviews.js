import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    // console.log(props);
    // const { name, id, img, Rating } = props.review;
    const [reviews, setReviews] = useReviews();
    return (
        <div className='reviews-container'>
            {
                reviews.map(review => <Review key={review.id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;