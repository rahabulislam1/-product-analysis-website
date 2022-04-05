import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Review.css'

const Review = (props) => {
    const { id, name, img, Rating, review } = props.review;
    return (
        <CardGroup>
            <Card className='card'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> <strong>User :</strong> {name}</Card.Title>
                    <Card.Text>
                        <strong>Comment:</strong> {review}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <p><strong>Rating :</strong> {Rating}</p>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default Review;