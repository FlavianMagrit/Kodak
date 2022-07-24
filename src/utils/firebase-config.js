import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBsYojUP6Rgghlwh2BQxGRdsZZiIxVEDiU',
  authDomain: 'kodak-9faba.firebaseapp.com',
  projectId: 'kodak-9faba',
  storageBucket: 'kodak-9faba.appspot.com',
  messagingSenderId: '356356840132',
  appId: '1:356356840132:web:60b733353d63fb50674791',
  measurementId: 'G-7DPJZB2FSC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const auth = getAuth(app);
