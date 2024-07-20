// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk1BKxjs-DKtDPpeJofqiGUrOpAnT20vI",
  authDomain: "netflix-gpt-cb68c.firebaseapp.com",
  projectId: "netflix-gpt-cb68c",
  storageBucket: "netflix-gpt-cb68c.appspot.com",
  messagingSenderId: "1011649698010",
  appId: "1:1011649698010:web:84914f0140f2798181ede3",
  measurementId: "G-369RNY4XBB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
