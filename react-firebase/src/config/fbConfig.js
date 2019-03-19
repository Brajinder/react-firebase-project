import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Initialize Firebase
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBA-abvDvFemD2ZFWa5d_I6sZJNQ3fLrdA",
    authDomain: "miniproject-837e3.firebaseapp.com",
    databaseURL: "https://miniproject-837e3.firebaseio.com",
    projectId: "miniproject-837e3",
    storageBucket: "miniproject-837e3.appspot.com",
    messagingSenderId: "760341268818"
  };
  
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;
