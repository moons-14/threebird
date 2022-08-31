import { getAnalytics } from "@firebase/analytics";
import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";

export const app = initializeApp({
  apiKey: "AIzaSyD-gsady4neB0swc0z-6UW_BihqLu_k_hk",
  authDomain: "threebird-web3.firebaseapp.com",
  projectId: "threebird-web3",
  storageBucket: "threebird-web3.appspot.com",
  messagingSenderId: "45996839787",
  appId: "1:45996839787:web:3768d8faac6f626f24322e",
  measurementId: "G-CK9HJHN9Q8"
});

export const db = getFirestore(app);

export const analytics = getAnalytics(app);

export const auth = getAuth(app);
