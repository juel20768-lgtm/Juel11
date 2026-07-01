// Firebase SDK মডিউলসমূহ ইম্পোর্ট করা হলো
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// আপনার দেওয়া আসল ফায়ারবেস কনফিগারেশন
const firebaseConfig = {
  apiKey: "AIzaSyCPG0YQeTFcvK9CZdfArh5Yxhl9JJyPWKg",
  authDomain: "ngocom-7a172.firebaseapp.com",
  projectId: "ngocom-7a172",
  storageBucket: "ngocom-7a172.firebasestorage.app",
  messagingSenderId: "150547244077",
  appId: "1:150547244077:web:cf0e2d36317ef5346a04a4",
  measurementId: "G-Z1MB5NHE94"
};

// ফায়ারবেস ইনিশিয়ালাইজ করা হলো
const app = initializeApp(firebaseConfig);

// অথেনটিকেশন এবং ডাটাবেজ অবজেক্ট তৈরি ও এক্সপোর্ট
export const auth = getAuth(app);
export const db = getFirestore(app);
