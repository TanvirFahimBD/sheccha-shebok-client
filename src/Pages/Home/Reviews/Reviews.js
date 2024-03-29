import React, { useEffect, useState } from "react";
import Review from "../Review/Review";
import { Box, Grid } from "@mui/material";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://sheccha-shebok-server.vercel.app/review")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="mx-5">
      <h1 className="text-center text-primary my-5">Client Reviews</h1>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {reviews.map((review) => (
            <Review review={review} key={review._id}></Review>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Reviews;
