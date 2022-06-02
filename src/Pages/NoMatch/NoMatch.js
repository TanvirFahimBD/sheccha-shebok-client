import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const NoMatch = () => {
  return (
    <div className="text-center">
      <img src="https://i.ibb.co/M9m5WyS/404-error-with-a-landscape-cuate.png" alt="" height="600px"/>
      <br />
      <h2>Go back to </h2>
      <Link to="/">
        <Button variant="contained">Home Page</Button>
      </Link>
    </div>
  );
};

export default NoMatch;
