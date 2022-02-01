// Import the functions you need from the SDKs you need
import firebaseApp from 'firebase';
import 'firebase/app';
import 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDkvr4_p2cff7ilm9LhJvrNiPl7lSAHvno',
  authDomain: 'yongstagram-p1.firebaseapp.com',
  databaseURL: 'https://yongstagram-p1-default-rtdb.firebaseio.com',
  projectId: 'yongstagram-p1',
  storageBucket: 'yongstagram-p1.appspot.com',
  messagingSenderId: '135242460160',
  appId: '1:135242460160:web:7db7d230cc8c06bb77fce5',
  measurementId: 'G-E70G9TJK6F'
};

// Initialize Firebase
firebaseApp.initializeApp(firebaseConfig);

export default firebaseApp;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDkvr4_p2cff7ilm9LhJvrNiPl7lSAHvno",
//   authDomain: "yongstagram-p1.firebaseapp.com",
//   databaseURL: "https://yongstagram-p1-default-rtdb.firebaseio.com",
//   projectId: "yongstagram-p1",
//   storageBucket: "yongstagram-p1.appspot.com",
//   messagingSenderId: "135242460160",
//   appId: "1:135242460160:web:7db7d230cc8c06bb77fce5",
//   measurementId: "G-E70G9TJK6F"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
