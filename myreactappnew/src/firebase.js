import firebase from "firebase";



const firebaseConfig = {
  apiKey: "AIzaSyCFWNsVMKDBvN5Qjfy539BXgDg0QI7c3cY",
  authDomain: "newproject-fdf78.firebaseapp.com",
  projectId: "newproject-fdf78",
  storageBucket: "newproject-fdf78.appspot.com",
  messagingSenderId: "897762910307",
  appId: "1:897762910307:web:8121dcc18267ea70c19856"
};

  firebase.initializeApp(firebaseConfig);
  var db= firebase.firestore();
  var storage=firebase.storage();
  var auth =firebase.auth();
  var provider=new firebase.auth.GoogleAuthProvider()

  export {db,storage,auth,provider}
