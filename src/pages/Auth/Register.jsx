import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h3>Register User</h3>
      <input
        placeholder="Email..."
        onChange={(event) => setRegisterEmail(event.target.value)}
      />
      <input
        placeholder="Password..."
        type="password"
        onChange={(event) => setRegisterPassword(event.target.value)}
      />
      <button onClick={register}>Create User</button>
    </div>
  );
}

export default Register;
