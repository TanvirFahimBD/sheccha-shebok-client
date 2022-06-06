import React from 'react';
import { Box, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const MySingleDonation = (props) => {
    const {transaction, email, date, event, eventBanner} = props.pay;
    const amount = props.pay.amount /100;

    return (
            <Grid item xs={12} md={6} lg={6} className="mb-3">
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea className="text-center">
        <img 
           height="200px" width="200px" 
          src={eventBanner}
        />
        <CardContent>

          <Typography variant="h6" color="text.secondary">
          {event}
          </Typography>

          <Typography className="text-primary" variant="h5" color="text.secondary">
          {amount}
          </Typography>

          <Typography variant="body2" color="text.secondary">
          Transaction ID: {transaction.substring(3,27)}
          </Typography>
          <Typography className="text-primary" variant="h6" color="text.secondary">
          {date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

        </Grid>
            // <img src={eventBanner} alt="" />
            // <h2>{event}</h2>
            // <h2>{amount}</h2>
            // {/* <h5>{email}</h5> */}
            // <h6>{transaction.substring(3,27)}</h6>
    );
};

export default MySingleDonation;