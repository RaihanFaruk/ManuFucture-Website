// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCsEuB1_dLLm2nAq5wZBVyEru6OfZYUOzI",
  authDomain: "china-manufucture.firebaseapp.com",
  projectId: "china-manufucture",
  storageBucket: "china-manufucture.appspot.com",
  messagingSenderId: "175730630523",
  appId: "1:175730630523:web:b800cb59b205cad0a567de"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;