// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZN2TWC7BeGKwqwMf9-n5CHj2HiEESEK0",
    authDomain: "oneagency1a.firebaseapp.com",
    projectId: "oneagency1a",
    storageBucket: "oneagency1a.firebasestorage.app",
    messagingSenderId: "447279546486",
    appId: "1:447279546486:web:11ec37625937c0deef1f57",
    measurementId: "G-EVLK3WN5RY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { app, auth };