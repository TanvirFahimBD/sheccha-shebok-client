import React from 'react';
import { Box, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Review = (props) => {
  const { message, name, review, img } = props.review;
  return (
    <Grid className='my-2' item xs={6} md={6} lg={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea className="text-center">
          <img
            width="100px" height="100px" style={{ borderRadius: "100%" }}
            src={img.endsWith("-c") ? "https://i.ibb.co/3czDVCx/undraw-profile-pic-ic5t.png" : img}
            alt="reviewer profile"
          />
          <CardContent>

            <Typography variant="body2" color="text.secondary">
              {message}
            </Typography>

            <Typography className='my-2' variant="body2" color="text.secondary">
              {review}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    </Grid>
  );
};

export default Review;