import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (

    // footer area
    <Box className="box-footer" sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 3 }}
        columns={{ xs: 2, sm: 12, md: 12 }}
      >
        <Grid className="text-start" style={{ textAlign: "center" }} item xs={2} sm={3} md={3}>

          {/* info & address area */}
          <h5 className="ms-4">Seccha Shebok </h5>
          <p style={{ width: "80%", marginLeft: "25px" }}>
            We are working for all types people those who's are facing hard time on their life.
          </p>
        </Grid>
        <Grid className="text-start" style={{ textAlign: "center" }} item xs={2} sm={3} md={3}>
          <h5>CONTACT US</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Groups</a>
            </li>
            <li>
              <a href="#">Email</a>
            </li>
            <li>
              <a href="#">Phone</a>
            </li>
          </ul>
        </Grid>
        <Grid className="text-start" style={{ textAlign: "center" }} item xs={2} sm={3} md={3}>

          {/* social links area */}
          <h5>SOCIAL LINKS</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </Grid>
        <Grid className="text-start" style={{ textAlign: "center" }} item xs={2} sm={3} md={3}>
          <h5 className="my-3">SUBSCRIBE NOW</h5>
          <TextField
            style={{ width: "50%" }}
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
          />
          <Button sx={{ p: 2 }} variant="contained">
            Send
          </Button>
        </Grid>
      </Grid>

      {/* copyright area */}
      <p id="copyright" className="col-sm">
        All rights reserved &copy; {new Date().getFullYear()}| Terms of services
        | Privacy
      </p>
    </Box>
  );
};

export default Footer;  