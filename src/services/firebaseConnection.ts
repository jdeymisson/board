import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig = {
  apiKey: "AIzaSyB6kRIQ8MhaVjQa6ikWtJEkNxjIjW1d7wI",
  authDomain: "boardapp-62c80.firebaseapp.com",
  projectId: "boardapp-62c80",
  storageBucket: "boardapp-62c80.appspot.com",
  messagingSenderId: "666716250503",
  appId: "1:666716250503:web:6e893aa33f652fc4ed7322",
  measurementId: "G-Q5QR2LSE0R"
};
// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
