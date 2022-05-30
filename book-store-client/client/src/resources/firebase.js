// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHS3YLmDMEMl1n-VqwOGzL18r9bj3FozI",
  authDomain: "ecommerce-16239.firebaseapp.com",
  databaseURL: "https://ecommerce-16239.firebaseio.com",
  projectId: "ecommerce-16239",
  storageBucket: "ecommerce-16239.appspot.com",
  messagingSenderId: "552684386940",
  appId: "1:552684386940:web:40be27b9d135262da127f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 

const auth = getAuth(app)
const provider = new GoogleAuthProvider();



export {auth, provider };
