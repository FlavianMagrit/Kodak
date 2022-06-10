import { initializeApp } from 'firebase/app';
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

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
