// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-c184d.firebaseapp.com",
  projectId: "blog-app-c184d",
  storageBucket: "blog-app-c184d.appspot.com",
  messagingSenderId: "1086568674443",
  appId: "1:1086568674443:web:9f553fef31da445ff1908e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

