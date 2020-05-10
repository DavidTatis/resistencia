import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyB7BXoeqGdsQKOb7G13JfnRyGw64hVzpMQ",
    authDomain: "resistencia-800ef.firebaseapp.com",
    databaseURL: "https://resistencia-800ef.firebaseio.com",
    projectId: "resistencia-800ef",
    storageBucket: "resistencia-800ef.appspot.com",
    messagingSenderId: "822294674823",
    appId: "1:822294674823:web:6a710cd0c1f0ed05c12722"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
