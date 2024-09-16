// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDacaODty6Wo77RFbOuZphJ7srQU_2vkJM",
    authDomain: "guidance-grid.firebaseapp.com",
    projectId: "guidance-grid",
    storageBucket: "guidance-grid.appspot.com",
    messagingSenderId: "409692931582",
    appId: "1:409692931582:web:5b5f2bc0bd23b4b892acaf",
    measurementId: "G-53XWF832JL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;