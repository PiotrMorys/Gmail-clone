import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB1on5fBrDjDzsCAzehw6YgJmiZAfPsQik",
    authDomain: "clone-bf6da.firebaseapp.com",
    projectId: "clone-bf6da",
    storageBucket: "clone-bf6da.appspot.com",
    messagingSenderId: "39750797531",
    appId: "1:39750797531:web:912cfd3b58b4bb4f1624fe",
    measurementId: "G-6VKC0SR676"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };