import { initializeApp , getApp , getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDxFDWEZk7_T9TbPwP408CXHAyclpwpvpg",
  authDomain: "prepwise-c8000.firebaseapp.com",
  projectId: "prepwise-c8000",
  storageBucket: "prepwise-c8000.firebasestorage.app",
  messagingSenderId: "891671715294",
  appId: "1:891671715294:web:ff49b55baf0eafdcd9d14f",
  measurementId: "G-HT57GR8C7V"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);

export const db = getFirestore(app)