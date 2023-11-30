import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyClXQSq7pVSKU1ToO2I68aI8azBzYXzkds",
  authDomain: "resumebuilder007.firebaseapp.com",
  projectId: "resumebuilder007",
  storageBucket: "resumebuilder007.appspot.com",
  messagingSenderId: "364493275869",
  appId: "1:364493275869:web:8f8eaffdceda20c137d134",
  measurementId: "G-CK0PFSVGKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export { app, auth };
