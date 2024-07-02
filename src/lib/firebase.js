import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatwave-4c388.firebaseapp.com",
  projectId: "chatwave-4c388",
  storageBucket: "chatwave-4c388.appspot.com",
  messagingSenderId: "260736155999",
  appId: "1:260736155999:web:d6f3b13be3a56bfcfe76ea"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()