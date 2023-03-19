import { getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: process.env.DOJO_APP_FIREBASE_API_KEY,
    authDomain: process.env.DOJO_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.DOJO_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.DOJO_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.DOJO_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.DOJO_APP_FIREBASE_APP_ID,
};

initializeApp(firebaseConfig);

export const db = getFirestore();
