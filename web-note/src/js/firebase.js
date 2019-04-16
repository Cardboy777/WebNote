import firebase from "firebase";

var config = {
    apiKey: "AIzaSyCJFZBoUVlWylgd61QvfhEae1n7U6xFgws",
    authDomain: "webnote-5b973.firebaseapp.com",
    databaseURL: "https://webnote-5b973.firebaseio.com",
    projectId: "webnote-5b973",
    storageBucket: "webnote-5b973.appspot.com",
    messagingSenderId: "538051144102"
  };
  firebase.initializeApp(config);

  export default firebase;