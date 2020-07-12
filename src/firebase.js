import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBnS6FVSPzvmYrmkO8a0KYMPlCavN83uT4",
  authDomain: "anis-messanger-app.firebaseapp.com",
  databaseURL: "https://anis-messanger-app.firebaseio.com",
  projectId: "anis-messanger-app",
  storageBucket: "anis-messanger-app.appspot.com",
  messagingSenderId: "430702978677",
  appId: "1:430702978677:web:d7c0880255fb75c1c4fa3c",
  measurementId: "G-CT08QMYWL8",
});

const db = firebaseApp.firestore();

export default db;
