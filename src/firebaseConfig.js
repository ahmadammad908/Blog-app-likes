import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBt_SHac02xf14H_g8SjBn48aAKYXc5Fa8",
  authDomain: "blog-app-9e859.firebaseapp.com",
  projectId: "blog-app-9e859",
  storageBucket: "blog-app-9e859.appspot.com",
  messagingSenderId: "650085424829",
  appId: "1:650085424829:web:072c65527947b0f75aa1d4",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
