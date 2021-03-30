import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDMrouL6J7xtcR_IxQLCcaWDDq5jEIWo3g",
    authDomain: "clone-d5fc0.firebaseapp.com",
    databaseURL: "https://clone-d5fc0.firebaseio.com",
    projectId: "clone-d5fc0",
    storageBucket: "clone-d5fc0.appspot.com",
    messagingSenderId: "849577447227",
    appId: "1:849577447227:web:3710de09528a1a8bd9711e",
    measurementId: "G-GF93YEBE7B"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};