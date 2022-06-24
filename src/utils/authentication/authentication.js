import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase-config';

export const register = async (registerEmail, registerPassword) =>
  createUserWithEmailAndPassword(auth, registerEmail, registerPassword);

export const login = async (loginEmail, loginPassword) =>
  signInWithEmailAndPassword(auth, loginEmail, loginPassword);

export const logout = async () => {
  await signOut(auth);
};
