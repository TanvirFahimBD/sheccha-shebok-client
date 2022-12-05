import React from 'react';
import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const MySingleDonation = (props) => {
  const { transaction, date, event, eventBanner } = props.pay;
  const amount = props.pay.amount / 100;

  return (
    <Grid item xs={12} md={6} lg={6} className="mb-3">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea className="text-center">
          <img
            height="200px" width="200px"
            src={eventBanner} alt="donation-topics"
          />
          <CardContent>
            <Typography variant="h6" color="text.secondary">
              {event}
            </Typography>
            <Typography className="text-primary my-3" variant="h6" color="text.secondary">
              ${amount} Money Donated
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Transaction ID: {transaction.substring(3, 27)}
            </Typography>
            <Typography className="text-primary mt-3" variant="h6" color="text.secondary">
              {date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default MySingleDonation;