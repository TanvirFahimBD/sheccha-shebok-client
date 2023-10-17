import useAuth from "../../../hooks/useAuth";
import { Alert, Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const { user } = useAuth();
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [education, setEducation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [error, setError] = useState("");

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const updateUser = {
      email: user.email,
      name: user.displayName,
      address,
      age,
      education,
      occupation,
    };
    fetch("https://sheccha-shebok-server.vercel.app/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount) {
          setError("");
          toast.success("Profile Updated Successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error.message);
      });
    e.target.reset();
  };
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <img
              className="m-5"
              src="https://i.ibb.co/1dTdh1N/Editing-body-text-bro.png"
              alt=""
              height="700px"
            />
          </Grid>
          <Grid item xs={6} className="text-center">
            <Typography sx={{ my: 8 }} variant="h2" component="h2">
              Edit Profile
            </Typography>
            <img
              src={user.photoURL}
              alt=""
              style={{ borderRadius: "100%" }}
              width={100}
              height={100}
            />
            <form className="mt-3" onSubmit={handleProfileUpdate}>
              <TextField
                sx={{ width: 300 }}
                className="my-3"
                id="standard-basic"
                label="Name"
                name="name"
                type="text"
                variant="filled"
                value={user.displayName || ""}
                readOnly
              />
              <br />
              <TextField
                sx={{ width: 300 }}
                className="my-3"
                id="standard-basic"
                label="Email"
                name="email"
                type="email"
                variant="filled"
                value={user.email || ""}
                readOnly
              />
              <br />
              <TextField
                sx={{ width: 300 }}
                className="my-3"
                id="standard-basic"
                label="Address"
                name="address"
                type="text"
                variant="filled"
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <br />
              <TextField
                sx={{ width: 300 }}
                className="my-3"
                id="standard-basic"
                label="Age"
                name="age"
                type="text"
                variant="filled"
                onChange={(e) => setAge(e.target.value)}
                required
              />
              <br />
              <TextField
                sx={{ width: 300 }}
                className="my-3"
                id="standard-basic"
                label="Education"
                name="education"
                type="text"
                variant="filled"
                onChange={(e) => setEducation(e.target.value)}
                required
              />
              <br />
              <TextField
                sx={{ width: 300 }}
                className="my-3"
                id="standard-basic"
                label="Occupation"
                name="occupation"
                type="text"
                variant="filled"
                onChange={(e) => setOccupation(e.target.value)}
                required
              />
              <br />
              <Button sx={{ width: 300 }} variant="contained" type="submit">
                Update
              </Button>
            </form>
            {error && (
              <Alert sx={{ mt: 4, width: "300px" }} severity="error">
                {error}
              </Alert>
            )}
          </Grid>
        </Grid>
      </Box>
      <ToastContainer />
    </div>
  );
};

export default Profile;
