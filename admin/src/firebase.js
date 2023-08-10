// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHS7yEvwZRIPXTB8ZXFYoQI5YgGwHzghA",
  authDomain: "shop-ec139.firebaseapp.com",
  projectId: "shop-ec139",
  storageBucket: "shop-ec139.appspot.com",
  messagingSenderId: "681165828694",
  appId: "1:681165828694:web:209fd29e0e6573d0db41f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;