import { MessageData } from '@Redux/chatInfo/customTypes';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const app = initializeApp({
  apiKey: 'AIzaSyAe9OS3zT5eRjxYT0fLZeeehIxuGijh7tU',
  authDomain: 'fir-chat-cdfb2.firebaseapp.com',
  projectId: 'fir-chat-cdfb2',
  storageBucket: 'fir-chat-cdfb2.appspot.com',
  messagingSenderId: '61773623157',
  appId: '1:61773623157:web:0dc44af3a40a7fd3812d3c',
  measurementId: 'G-1FVGCGDYYS',
});

export const auth = getAuth(app);
export const db = getFirestore(app);

export const messages = collection(db, 'messages');

/** Agrega mensaje a la db */
export async function addMessage(data: MessageData) {
  addDoc(messages, {
    ...data,
    createdAt: serverTimestamp(),
  });
}
