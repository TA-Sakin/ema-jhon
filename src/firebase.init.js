// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA18BDq9rlrvxDyctI4aUPvuvRgInEX6I",
  authDomain: "ema-jhon-simple-bf90f.firebaseapp.com",
  projectId: "ema-jhon-simple-bf90f",
  storageBucket: "ema-jhon-simple-bf90f.appspot.com",
  messagingSenderId: "648436117133",
  appId: "1:648436117133:web:3ede493ddbf32470257cc4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
