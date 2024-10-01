// src/firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; // Optional, only if you want to use analytics

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYHA9tQnZXvwP79exzMfDhJ5lliaWO1o0",
  authDomain: "signup-hub.firebaseapp.com",
  projectId: "signup-hub",
  storageBucket: "signup-hub.appspot.com",
  messagingSenderId: "464357447536",
  appId: "1:464357447536:web:9d963d7c7290dd89aaa1b5",
  measurementId: "G-6LKCNG3WPH" // Optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Optional, remove if not using analytics

export default app; // Export the initialized app
