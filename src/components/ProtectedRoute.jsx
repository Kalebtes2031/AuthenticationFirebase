import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config"; // Adjust the import based on your file structure

const ProtectedRoute = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsSignedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  if (isSignedIn === null) {
    // You can render a loading spinner or something else while checking the auth state
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/auth/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
