// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDoc, setDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsnlG-_pYuhlqXUdDHmvHeGhXFxc23eDY",
  authDomain: "hitwealth-bd009.firebaseapp.com",
  databaseURL: "https://hitwealth-bd009-default-rtdb.firebaseio.com",
  projectId: "hitwealth-bd009",
  storageBucket: "hitwealth-bd009.firebasestorage.app",
  messagingSenderId: "553605351435",
  appId: "1:553605351435:web:fd8d10a1f3d8ce0bbf1f0e",
  measurementId: "G-JEVXF0QH7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Export necessary Firestore functions for CRUD operations
export { app, db, collection, addDoc, getDoc, setDoc, updateDoc, deleteDoc, doc };