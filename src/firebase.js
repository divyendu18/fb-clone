import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC5i8YbG9kzgXgciLBzRN7lrFfXCC35qGc",
    authDomain: "facebook-clone-a8934.firebaseapp.com",
    databaseURL: "https://facebook-clone-a8934.firebaseio.com",
    projectId: "facebook-clone-a8934",
    storageBucket: "facebook-clone-a8934.appspot.com",
    messagingSenderId: "940049581224",
    appId: "1:940049581224:web:a5885d862a6867177a2e9d",
    measurementId: "G-C2WXXRGYNB"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;