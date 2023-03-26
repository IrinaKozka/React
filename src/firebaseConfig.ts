// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getStorage} from 'firebase/storage'



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAOyONMgbj_Vjg5V_vNVIviQ_Kr6R1yjM",
  authDomain: "sda-news-9376f.firebaseapp.com",
  projectId: "sda-news-9376f",
  storageBucket: "sda-news-9376f.appspot.com",
  messagingSenderId: "411868887784",
  appId: "1:411868887784:web:02451cda40853aea41a75d",
  measurementId: "G-N8DK5TMSK3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)

