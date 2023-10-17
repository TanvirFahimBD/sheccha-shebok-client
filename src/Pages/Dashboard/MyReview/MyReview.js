import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import SingleReview from "../SingleReview/SingleReview";

// todo - display event based review history

const MyReview = () => {
  const { user } = useAuth();
  const [myReview, setMyReview] = useState([]);
  const myEmail = user?.email;

  useEffect(() => {
    fetch(`https://sheccha-shebok-server.vercel.app/review/${myEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReview(data);
      });
  }, [myEmail]);

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <img
              className="m-5"
              src="https://i.ibb.co/MkmrsTh/Online-Review-bro.png "
              alt=""
              height="700px"
            />
          </Grid>
          <Grid item xs={6} className="mt-4">
            {myReview.map((rev) => (
              <SingleReview rev={rev} key={rev._id}></SingleReview>
            ))}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MyReview;
