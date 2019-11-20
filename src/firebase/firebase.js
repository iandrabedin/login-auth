import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwX9u7o4nnW28o5WAyh_MCAc43fZLZyLs",
  authDomain: "login-auth-e1e16.firebaseapp.com",
  databaseURL: "https://login-auth-e1e16.firebaseio.com",
  projectId: "login-auth-e1e16",
  storageBucket: "login-auth-e1e16.appspot.com",
  messagingSenderId: "60452597884",
  appId: "1:60452597884:web:2f6a055b68e39c227b19f9",
  measurementId: "G-12Y5G23F88"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
