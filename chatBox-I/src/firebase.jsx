
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQ9jii2J1AdRNtHbKKo2MKDYMVzn9udTI",
  authDomain: "chatbox-17734.firebaseapp.com",
  projectId: "chatbox-17734",
  storageBucket: "chatbox-17734.appspot.com",
  messagingSenderId: "985604049494",
  appId: "1:985604049494:web:d88631fb637e5e5f2d49f7",
  measurementId: "G-DHBQ4WX1TG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);