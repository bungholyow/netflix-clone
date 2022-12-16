// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdUo2amCl5SYEcEkohuLnIoZA48yZ0bng",
  authDomain: "netflix-clone-3ee6c.firebaseapp.com",
  projectId: "netflix-clone-3ee6c",
  storageBucket: "netflix-clone-3ee6c.appspot.com",
  messagingSenderId: "841408071146",
  appId: "1:841408071146:web:be0bf9a055a113773a5e93"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }