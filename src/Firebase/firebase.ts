import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkwfQretL57QpXoEE9_oW-squRJ8h9GUI",
  authDomain: "books-world-4dd07.firebaseapp.com",
  projectId: "books-world-4dd07",
  storageBucket: "books-world-4dd07.appspot.com",
  messagingSenderId: "387144570871",
  appId: "1:387144570871:web:2b7c2473941827dce1c0f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
