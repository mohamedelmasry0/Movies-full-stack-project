import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCfelxNAgaaZxG6DuOymon_juSk7gBChY",
  authDomain: "movies-7013e.firebaseapp.com",
  projectId: "movies-7013e",
  storageBucket: "movies-7013e.appspot.com",
  messagingSenderId: "972352325009",
  appId: "1:972352325009:web:460a5bc1640638442e8630",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export { db, auth };
