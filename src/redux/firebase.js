import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDERID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, GoogleProvider, signOut, db, storage };
