import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
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

export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

const colref = collection(db, 'products');

export const getProducts = getDocs(colref)
  .then((snapshot) => {
    let products = [];
    snapshot.docs.forEach((doc) => {
      products.push({ ...doc.data(), id: doc.id });
    });
    return products;
  })
  .catch((error) => {
    console.log(error);
  });
