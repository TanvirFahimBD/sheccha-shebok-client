import React from 'react';

const Review = (props) => {
    const {message, name, review, img} = props.review;
    return (
        <div>
            <img src={img} alt="" width="100px" height="100px" />
            <h4>{name}</h4>
            <p>{message}</p>
            <p>{review}</p>
        </div>
    );
};

export default Review;