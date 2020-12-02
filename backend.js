// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAzXwZ_tziFzjWWLU7k14AylCnZDFoTZ6w",
    authDomain: "fitfriends-358c4.firebaseapp.com",
    databaseURL: "https://fitfriends-358c4.firebaseio.com",
    projectId: "fitfriends-358c4",
    storageBucket: "fitfriends-358c4.appspot.com",
    messagingSenderId: "1021087822707",
    appId: "1:1021087822707:web:ce8424740bf1928c1b4b06",
    measurementId: "G-1MSRT2Q5WW"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase;
