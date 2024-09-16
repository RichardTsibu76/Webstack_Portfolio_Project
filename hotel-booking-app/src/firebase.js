// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCCe-rt6KGdJDelJtVjJKyLgnw1Udd6j1Y",
  authDomain: "hotel-booking-e3ff4.firebaseapp.com",
  databaseURL: "https://hotel-booking-e3ff4-default-rtdb.firebaseio.com",
  projectId: "hotel-booking-e3ff4",
  storageBucket: "hotel-booking-e3ff4.appspot.com",
  messagingSenderId: "204049873535",
  appId: "1:204049873535:web:6122bf4e39bd40f7559d4a",
  measurementId: "G-S8Z40EXPTH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
