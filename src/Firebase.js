// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER,
  appId: import.meta.env.VITE_APP_ID
};



// delete later
// const firebaseConfig = {
//   apiKey: "AIzaSyBlCEnezxV8i7RyJGzhQIcZejgyxI2pOBQ",
//   authDomain: "netflix-react-8131c.firebaseapp.com",
//   projectId: "netflix-react-8131c",
//   storageBucket: "netflix-react-8131c.appspot.com",
//   messagingSenderId: "130167987553",
//   appId: "1:130167987553:web:3db35d1879919a910ff920"
// };

// delete later


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
// to create backend with firebase - step 1


