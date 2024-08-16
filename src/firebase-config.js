import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-bkPhZpb9uiLMQJ5gTm0DKSqzgaJoTMQ",
  authDomain: "authenticationpractice-a0613.firebaseapp.com",
  projectId: "authenticationpractice-a0613",
  storageBucket: "authenticationpractice-a0613.appspot.com",
  messagingSenderId: "274307957755",
  appId: "1:274307957755:web:1601c3bfbdf73464f4415e",
  measurementId: "G-Z6J5JL3VE0"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);