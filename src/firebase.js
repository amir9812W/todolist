// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkkt8jd6Hot-bMtfIIrVbEiaG_aZuT6Ps",
  authDomain: "firegram-59a48.firebaseapp.com",
  projectId: "firegram-59a48",
  storageBucket: "firegram-59a48.appspot.com",
  messagingSenderId: "566181043599",
  appId: "1:566181043599:web:a6d20634dee48be9d9bffa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)






export {db}