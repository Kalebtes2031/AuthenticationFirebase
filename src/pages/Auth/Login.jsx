import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { auth } from "../../firebase-config";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      navigate("/home"); // Redirect to Home page on successful login
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h3>Login</h3>
      <input
        placeholder="Email..."
        onChange={(event) => setLoginEmail(event.target.value)}
      />
      <input
        placeholder="Password..."
        type="password"
        onChange={(event) => setLoginPassword(event.target.value)}
      />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
