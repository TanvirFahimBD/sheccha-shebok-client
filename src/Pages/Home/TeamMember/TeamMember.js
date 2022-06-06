import React from 'react';
import Card from '@mui/material/Card';
import {  Grid } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const TeamMember = (props) => {
    const {banner, image, date, desc, email,  index, key, name, title, _id} = props.member;
    return (
        <div>
            <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 625 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`data:image/png;base64,${banner}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
        </div>
    );
};

export default TeamMember;

// image={`data:image/png;base64,${banner}`}