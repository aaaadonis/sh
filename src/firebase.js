// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCccZfUm92iE4jPUXUIv3Q4aH19rrvLAxw",
  authDomain: "shideaprogram.firebaseapp.com",
  projectId: "shideaprogram",
  storageBucket: "shideaprogram.appspot.com",
  messagingSenderId: "915926589981",
  appId: "1:915926589981:web:b7470d8328ee272cbf5cf4",
  measurementId: "G-Y9BKG84GC5",
};

const myApp = initializeApp(firebaseConfig);

const myAuth = getAuth(myApp);
const myFS = getFirestore(myApp);

export { myAuth, myFS };