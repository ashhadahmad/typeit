import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyDb9H5ViOAIubrbAaFJxT1y7vuvMjcBtwg",
    authDomain: "typeit-react.firebaseapp.com",
    databaseURL: "https://typeit-react.firebaseio.com",
    projectId: "typeit-react",
    storageBucket: "typeit-react.appspot.com",
    messagingSenderId: "146065888248"
  };
  firebase.initializeApp(config);
  firebase.firestore();

  export default firebase;