// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzX9xDi2_dAbNQijuHqZ8MEm-V_-HhYgA",
  authDomain: "sports-day-db.firebaseapp.com",
  projectId: "sports-day-db",
  storageBucket: "sports-day-db.appspot.com",
  messagingSenderId: "828947112094",
  appId: "1:828947112094:web:b3bfe118938080a758db8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
