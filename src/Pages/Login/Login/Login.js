import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle, user } = useAuth();
  const navigate = useNavigate()

  const handleGoogleSignIn=()=> {
    signInUsingGoogle()
    if(user?.email){
      navigate("/")
    }
  }

  return (
    <div>
      <h1>Login Here</h1>
      <button onClick={handleGoogleSignIn}>Google SignIn</button>
    </div>
  );
};

export default Login;
