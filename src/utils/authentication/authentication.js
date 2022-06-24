import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase-config';

export const register = async (registerEmail, registerPassword) => {
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword,
    );
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};

export const login = async (loginEmail, loginPassword) =>
  signInWithEmailAndPassword(auth, loginEmail, loginPassword);

export const logout = async () => {
  await signOut(auth);
};
