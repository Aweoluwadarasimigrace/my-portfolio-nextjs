// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHnTUWHgXjGfZ3-akGy8OFJ8h9cmnYEOg",
  authDomain: "my-portfolio-3fc62.firebaseapp.com",
  projectId: "my-portfolio-3fc62",
  storageBucket: "my-portfolio-3fc62.firebasestorage.app",
  messagingSenderId: "343915446554",
  appId: "1:343915446554:web:8a13d73195b5279dd12ca3",
  measurementId: "G-D8KDDJ6XX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);