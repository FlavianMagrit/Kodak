import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from '../firebase-config';

export const register = async (registerEmail, registerPassword) =>
  createUserWithEmailAndPassword(auth, registerEmail, registerPassword);

export const login = async (loginEmail, loginPassword) =>
  signInWithEmailAndPassword(auth, loginEmail, loginPassword);

export const logout = async () => {
  await signOut(auth);
};

export const forgotPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};
