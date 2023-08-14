import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBV7agV50eyuYp2OOJh6ev8HF8iiVf4Y9c",
  authDomain: "my-app-coderhouse2023.firebaseapp.com",
  projectId: "my-app-coderhouse2023",
  storageBucket: "my-app-coderhouse2023.appspot.com",
  messagingSenderId: "293899697059",
  appId: "1:293899697059:web:0cff0d0b794c77519eb816",
  measurementId: "G-V1TP6HRLS2",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
