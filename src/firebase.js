// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3T7P9tdp2E7nEq3-qbuIRwc_Nr74jZW0",
  authDomain: "chatwebsite-bd0bd.firebaseapp.com",
  projectId: "chatwebsite-bd0bd",
  storageBucket: "chatwebsite-bd0bd.appspot.com",
  messagingSenderId: "824639707998",
  appId: "1:824639707998:web:1e465c693e63eee3a84dcf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
