// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCy9jHnePAa9vW8lELFI6c-dvqLj2Wmu9c",
  authDomain: "room-buddy-770c6.firebaseapp.com",
  projectId: "room-buddy-770c6",
  storageBucket: "room-buddy-770c6.appspot.com",
  messagingSenderId: "383295055040",
  appId: "1:383295055040:web:7167d679bb05bb38d53925",
  measurementId: "G-GTGWTQQWQ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
