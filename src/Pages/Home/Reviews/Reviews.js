import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(response => response.json())
        .then(data => {
            setReviews(data);
            console.log(data);
        })
    }, [])
    return (
        <div>
            <h1>Reviews</h1>
            {
                reviews.map(review => <Review review={review} key={review._id} ></Review>)
            }
        </div>
    );
};

export default Reviews;