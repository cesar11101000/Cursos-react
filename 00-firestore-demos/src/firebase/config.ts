import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyBZp09RKuGHTiXPbrdDVhlK3CPfuFXwV1w",

    authDomain: "sql-demos-ea917.firebaseapp.com",

    projectId: "sql-demos-ea917",

    storageBucket: "sql-demos-ea917.appspot.com",

    messagingSenderId: "663678059427",

    appId: "1:663678059427:web:2870a969acb1e1600d9016",

    measurementId: "G-4LN9ZWGGGD"

};

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  console.log('firebase configurado');

  export default firebase.firestore();
