// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDG1ZgVB-dnB-Nys1nLJ4TMcwyCURHITOg",
    authDomain: "progress-hub-f1b0d.firebaseapp.com",
    projectId: "progress-hub-f1b0d",
    storageBucket: "progress-hub-f1b0d.appspot.com",
    messagingSenderId: "1012093664482",
    appId: "1:1012093664482:web:e1b3f9e39fbc119e1fb2bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;