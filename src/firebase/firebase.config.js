// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXrPc37iaXUlZAn0swfTwxfawvgWtjKSc",
  authDomain: "toy-trackers.firebaseapp.com",
  projectId: "toy-trackers",
  storageBucket: "toy-trackers.appspot.com",
  messagingSenderId: "796921871434",
  appId: "1:796921871434:web:0ffa40638911f463ad7ab3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;