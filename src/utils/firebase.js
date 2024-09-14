// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeGtCuUOSn0VzhcCXGTBihDcwtFeRY-wU",
  authDomain: "netflixgpt-a9568.firebaseapp.com",
  projectId: "netflixgpt-a9568",
  storageBucket: "netflixgpt-a9568.appspot.com",
  messagingSenderId: "872046310826",
  appId: "1:872046310826:web:008dca08fdbafc818667d3",
  measurementId: "G-ZMP1HDXJMV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
