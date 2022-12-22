import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPW6nbgedn3Wj-svW6T15CqCEeGgH4JZQ",
  authDomain: "clone-fc197.firebaseapp.com",
  projectId: "clone-fc197",
  storageBucket: "clone-fc197.appspot.com",
  messagingSenderId: "12982423049",
  appId: "1:12982423049:web:b0a840d95a765ffc78b2d8",
  measurementId: "G-8BRS6WMBTE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
