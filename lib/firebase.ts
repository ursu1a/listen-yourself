import { initializeApp } from "firebase/app";
import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// Firebase configuration settings
const firebaseConfig = {
  apiKey: "AIzaSyC0xEEC7KAFW0ZB1ahPYcECfNBcMgTJZVQ",
  authDomain: "listen-yourself.firebaseapp.com",
  projectId: "listen-yourself",
  storageBucket: "listen-yourself.firebasestorage.app",
  messagingSenderId: "515753149556",
  appId: "1:515753149556:web:dfe01ee07eebec2b60fd21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, doc, getDoc };
