import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB935NQO5TjGCbYPLpb36P2gkbzuQQhxbM",
  authDomain: "fortuna-8bd9d.firebaseapp.com",
  projectId: "fortuna-8bd9d",
  storageBucket: "fortuna-8bd9d.appspot.com",
  messagingSenderId: "185889284418",
  appId: "1:185889284418:web:86125a766abf3cbba6a8db",
};

const app = initializeApp(firebaseConfig);

export const firebaseStore = getFirestore(app);

export default app;
