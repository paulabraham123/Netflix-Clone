import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBblOJEmgEKcW2OLwAf4qVueAduJE0rW7k",
  authDomain: "netflix-build-4fd9b.firebaseapp.com",
  projectId: "netflix-build-4fd9b",
  storageBucket: "netflix-build-4fd9b.appspot.com",
  messagingSenderId: "983796736102",
  appId: "1:983796736102:web:3f42fe090edf3c34438da7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
