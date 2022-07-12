// Import the functions you need from the SDKs you need
import {getFirestore} from "firebase/firestore";
import {initializeApp} from 'firebase/app';



const firebaseApp = {
    apiKey: "AIzaSyDCLDu5J2iZNCLWCTeJqHYJwiQb3_UYSZQ",
    authDomain: "shit-5db73.firebaseapp.com",
    projectId: "shit-5db73",
    storageBucket: "shit-5db73.appspot.com",
    messagingSenderId: "297025027097",
    appId: "1:297025027097:web:a52afb9f26ea55d1bffe88",
    measurementId: "G-HNZS6292HE",
}

const myApp = initializeApp(firebaseApp);

const db = getFirestore(myApp);

export { db };
