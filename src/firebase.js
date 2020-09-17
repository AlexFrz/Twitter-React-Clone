import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBSgzxQ95yVGcw8QdwIpaczX4uf23M3SjE",
  authDomain: "twitter-clone-358c7.firebaseapp.com",
  databaseURL: "https://twitter-clone-358c7.firebaseio.com",
  projectId: "twitter-clone-358c7",
  storageBucket: "twitter-clone-358c7.appspot.com",
  messagingSenderId: "323671164503",
  appId: "1:323671164503:web:2e4de6876d1c9f3a44c512",
  measurementId: "G-THTN4RBTTH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
