import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Home() {
  const [user, setUser] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div>
      <h4>User Logged In:</h4>
      {user?.email ? (
        <>
          <p>{user.email}</p>
          <button onClick={logout}>Sign Out</button>
        </>
      ) : (
        <p>No user is logged in</p>
      )}
    </div>
  );
}

export default Home;
