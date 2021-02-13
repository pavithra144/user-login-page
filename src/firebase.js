import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyChS5K6AEb71WZ4gkScysJl2fgHsH1o3cc",
  authDomain: "dashboard-f4a5b.firebaseapp.com",
  projectId: "dashboard-f4a5b",
  storageBucket: "dashboard-f4a5b.appspot.com",
  messagingSenderId: "612326431191",
  appId: "1:612326431191:web:589ddc78a2a9ee277e9392",
  measurementId: "G-K5SD3NZP0B",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
