// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDCLDu5J2iZNCLWCTeJqHYJwiQb3_UYSZQ",
    authDomain: "shit-5db73.firebaseapp.com",
    projectId: "shit-5db73",
    storageBucket: "shit-5db73.appspot.com",
    messagingSenderId: "297025027097",
    appId: "1:297025027097:web:a52afb9f26ea55d1bffe88",
    measurementId: "G-HNZS6292HE",
})

const db = getFirestore(firebaseApp);

export { db };
