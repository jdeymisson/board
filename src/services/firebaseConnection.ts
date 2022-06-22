import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig = {
  apiKey: "AIzaSyCWYK-RyGYBIcBCa50kU7f0JdxAlhIjurY",
  authDomain: "boardapp-b81f9.firebaseapp.com",
  projectId: "boardapp-b81f9",
  storageBucket: "boardapp-b81f9.appspot.com",
  messagingSenderId: "795781375449",
  appId: "1:795781375449:web:10e53180ee185d307fe5c8",
  measurementId: "G-F56NH1SSR5"
};

// Initialize Firebase
if(!firebase.apps.length){
  const app = firebase.initializeApp(firebaseConfig);
}

export default firebase;
