// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUeWYrAvWHeez-FWMdjPh8T1gy-Q2LJqs",
  authDomain: "chill-game-aa1c3.firebaseapp.com",
  projectId: "chill-game-aa1c3",
  storageBucket: "chill-game-aa1c3.firebasestorage.app",
  messagingSenderId: "112961836085",
  appId: "1:112961836085:web:c574bbef2a7c9f9d784d7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);