import React from "react";
import { useState } from "react";

export const Home = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleRegister = () => {
    console.log("registered");
  }

  const handleLogin = () => {
    console.log("logged in");
  }
  
  const handleLogout = () => {
    console.log("logged out");
  }
  return (
    <div>
      <div>
        <h1>Register User</h1>
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => setRegisterEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => setRegisterPassword(event.target.value)}
        />
        <button onClick={handleRegister}>Create User</button>
      </div>
      <div>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => setLoginEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => setLoginPassword(event.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
      <div>
        <h1>User Logged In:</h1>
        <button onClick={handleLogout}>Sign Out</button>
      </div>
    </div>
  );
};
