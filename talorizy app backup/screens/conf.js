// Import the functions you need from the SDKs you need
import { initializeApp }from"firebase/app"
import{getDatabase} from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPTLY_pXFLW1uXEHrlmFZfjBQ4Phfh7f0",
  authDomain: "database-21056.firebaseapp.com",
  databaseURL: "https://database-21056-default-rtdb.firebaseio.com",
  projectId: "database-21056",
  storageBucket: "database-21056.appspot.com",
  messagingSenderId: "560875851582",
  appId: "1:560875851582:web:802e56fc060fa32cdf266f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);