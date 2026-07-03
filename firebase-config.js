// Firebase SDK মডিউলসমূহ CDN থেকে ইম্পোর্ট করা হলো
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// আপনার নতুন আপডেট করা ফায়ারবেস কনফিগারেশন
const firebaseConfig = {
  apiKey: "AIzaSyCJqxLXJov5pHd8zHPi71xeFofFnVHfZO4",
  authDomain: "ngo-3037d.firebaseapp.com",
  projectId: "ngo-3037d",
  storageBucket: "ngo-3037d.firebasestorage.app",
  messagingSenderId: "730245140402",
  appId: "1:730245140402:web:33a804f367f7be9e679eab",
  measurementId: "G-7T6NTNYXC3"
};

// ফায়ারবেস ইনিশিয়ালাইজ করা হলো
const app = initializeApp(firebaseConfig);

// অথেনটিকেশন এবং ডাটাবেজ অবজেক্ট এক্সপোর্ট করা হলো যেন অন্যান্য ফাইল থেকে ব্যবহার করা যায়
export const auth = getAuth(app);
export const db = getFirestore(app);
