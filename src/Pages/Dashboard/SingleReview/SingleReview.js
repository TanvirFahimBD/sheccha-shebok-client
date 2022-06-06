import React from 'react';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const SingleReview = (props) => {
    const { message, date, review } = props.rev;
    return (
        <div className='my-3 p-3' style={{ border: " 1px solid gray", borderRadius: "5px" }}>
            <h3> {message}</h3>
            <h4 className='text-primary'><AccessTimeFilledIcon /> {date}</h4>
            <h5><ReviewsIcon /> {review}</h5>
        </div>
    );
};

export default SingleReview;