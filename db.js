// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC2X0pHx-BINAI9ecp1jEcr15imVCGEd7c',
  authDomain: 'house-points-882ac.firebaseapp.com',
  projectId: 'house-points-882ac',
  storageBucket: 'house-points-882ac.appspot.com',
  messagingSenderId: '970622774265',
  appId: '1:970622774265:web:bab2c4483f7ad6cd336b28',
  measurementId: 'G-J315L959B4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
