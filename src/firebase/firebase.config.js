// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnvo2Yafs4oT_2DLg8rnrykCFs3bcF45U",
  authDomain: "repliq-easyshop.firebaseapp.com",
  projectId: "repliq-easyshop",
  storageBucket: "repliq-easyshop.appspot.com",
  messagingSenderId: "488695635981",
  appId: "1:488695635981:web:3a96be1d65aed03a85b544",
  measurementId: "G-L3DD0EJKD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);