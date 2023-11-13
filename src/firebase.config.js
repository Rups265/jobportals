// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkPgqCkfzQfO-cIy3ZgAPTGqKfSUO4BnU",
  authDomain: "jobprtal-be219.firebaseapp.com",
  projectId: "jobprtal-be219",
  storageBucket: "jobprtal-be219.appspot.com",
  messagingSenderId: "449585352806",
  appId: "1:449585352806:web:79c0afc4f1d8f8c61f9da7",
  measurementId: "G-9V50W883K0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};
