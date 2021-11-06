import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyBsBAYnDZD4hvqoBzQ0ChZ7iVWbcv--aBc",
  authDomain: "genshinguruapp.firebaseapp.com",
  projectId: "genshinguruapp",
  storageBucket: "genshinguruapp.appspot.com",
  messagingSenderId: "521056779444",
  appId: "1:521056779444:web:7312eb19486d25d896ebe1",
  measurementId: "G-RGLWCDG099"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }