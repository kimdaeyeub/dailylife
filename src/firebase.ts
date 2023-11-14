import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB6i4op1xG--IIpsqrimfKOrAz4YmjT9Pg",
  authDomain: "dailylife-e5a9d.firebaseapp.com",
  projectId: "dailylife-e5a9d",
  storageBucket: "dailylife-e5a9d.appspot.com",
  messagingSenderId: "129648283581",
  appId: "1:129648283581:web:2c985bde054ed86bda8cd4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
