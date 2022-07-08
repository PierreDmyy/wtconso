import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAssr1lJqXuInSKnrwwI7s2IRUDRFVY0wc",
  authDomain: "wtconso.firebaseapp.com",
  databaseURL: "https://wtconso-default-rtdb.firebaseio.com",
  projectId: "wtconso",
  storageBucket: "wtconso.appspot.com",
  messagingSenderId: "716238616955",
  appId: "1:716238616955:web:57e0baa9129c519597e5de",

};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
