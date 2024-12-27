import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBg4KsbDdzrjhUvXP3z9eFHFV9WCarAiM8",
  authDomain: "ziaproperties-e93d2.firebaseapp.com",
  projectId: "ziaproperties-e93d2",
  storageBucket: "ziaproperties-e93d2.appspot.com",
  messagingSenderId: "463287158578",
  appId: "1:463287158578:web:fd4e722d1ef48bd318b92b",
  measurementId: "G-RJLLSXX63W"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };