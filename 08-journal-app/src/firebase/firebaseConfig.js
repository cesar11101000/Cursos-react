import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAw19Q2hrCJ5XtiOaQbRF7iK9agjN0F7Ck",
    authDomain: "react-app-cursos-98c54.firebaseapp.com",
    projectId: "react-app-cursos-98c54",
    storageBucket: "react-app-cursos-98c54.appspot.com",
    messagingSenderId: "605806565542",
    appId: "1:605806565542:web:d6437566a84aeb0845bc67"
};

const firebaseConfigTesting = {
  apiKey: "AIzaSyBSuGkN_yTv03LkdaJbypVqPZbWmgWZZHY",
  authDomain: "redux-demo-232dd.firebaseapp.com",
  projectId: "redux-demo-232dd",
  storageBucket: "redux-demo-232dd.appspot.com",
  messagingSenderId: "828283874504",
  appId: "1:828283874504:web:37fb2bcd0c2aa20ac2c9fd",
  measurementId: "G-W14Y7SCB3V"
};

if( process.env.NODE_ENV === 'test'){
  //testing
  firebase.initializeApp(firebaseConfigTesting);
}else{
  //dev
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    db, 
    googleAuthProvider,
    firebase
}

