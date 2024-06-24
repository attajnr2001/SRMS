// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAGnsjhnabLe2WBllufESkgBswbBWA10vg",
  authDomain: "srms-825f2.firebaseapp.com",
  projectId: "srms-825f2",
  storageBucket: "srms-825f2.appspot.com",
  messagingSenderId: "871731578074",
  appId: "1:871731578074:web:c87c29c3d5c789f3acd1e3",
  measurementId: "G-95Y0CC88RR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
