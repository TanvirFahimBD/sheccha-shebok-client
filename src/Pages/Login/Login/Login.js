import React from "react";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div>
      <h1>Login</h1>
      <button onClick={signInUsingGoogle}>Google SignIn</button>
    </div>
  );
};

export default Login;
