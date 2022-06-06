import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import { Box, Grid } from "@mui/material";

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(response => response.json())
            .then(data => {
                setReviews(data);
                // console.log(data);
            })
    }, [])
    return (
        <div>
            <h1 className='text-center text-primary my-5'>Reviews</h1>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {
                            reviews.map(review => <Review review={review} key={review._id} ></Review>)
                        }
                </Grid>
            </Box>

        </div>
    );
};

export default Reviews;