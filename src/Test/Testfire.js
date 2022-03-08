import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6wTEyBWqMmOdyt351gWX0KWJ_JwJJgac",
  authDomain: "doctor-home-1c0a5.firebaseapp.com",
  databaseURL: "https://doctor-home-1c0a5-default-rtdb.firebaseio.com",
  projectId: "doctor-home-1c0a5",
  storageBucket: "doctor-home-1c0a5.appspot.com",
  messagingSenderId: "299186204859",
  appId: "1:299186204859:web:d00d112bcca871f417799e",
  measurementId: "G-X968HG6CWH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
