// import * as firebase from "firebase";
// import * as firebase from "firebase/compat/app"
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/analytics";
import "firebase/compat/firestore";

/*import firebase from "firebase/app";
import "firebase/firestore";*/

const firebaseConfig = {
  apiKey: "AIzaSyC8yCo2uIMVIXVDnUIPTTK9J1ziKWqB2jU",
  authDomain: "group-buy-database.firebaseapp.com",
  projectId: "group-buy-database",
  storageBucket: "group-buy-database.appspot.com",
  messagingSenderId: "645498903815",
  appId: "1:645498903815:web:5c2b1a59af3425cce079a2",
  measurementId: "G-T4LS3Q2FN2",
};

// Initialize Firebase
/*firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const firebaseAuth = firebase.auth();
export const db = firebase.firestore();*/

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp;

export const firebaseAuth = firebase.auth();

firebase.auth().languageCode = "it";
