// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCTkV0EQnWi6dG-xeYR2POO48vDiAzETks",
    authDomain: "clone-69c02.firebaseapp.com",
    projectId: "clone-69c02",
    storageBucket: "clone-69c02.appspot.com",
    messagingSenderId: "711159091091",
    appId: "1:711159091091:web:4d467a17fddf92eb856266",
    measurementId: "G-NHHFBRFP7M"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth= firebase.auth();

  export {db, auth};