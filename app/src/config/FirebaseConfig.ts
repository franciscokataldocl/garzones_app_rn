
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getApp, initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence, initializeAuth } from 'firebase/auth';
import Config from 'react-native-config';

const firebaseConfig = {
    apiKey: Config.FIREBASE_API_KEY,
    authDomain: Config.FIREBASE_AUTH_DOMAIN,
    projectId: Config.FIREBASE_PROJECT_ID,
    storageBucket: Config.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:Config.FIREBASE_MESSAGING_SENDER_ID,
    appId: Config.FIREBASE_APP_ID,
    measurementId: Config.FIREBASE_MEASUREMENT_ID,
  };



  // initialize Firebase App
  const app = initializeApp(firebaseConfig);
  // initialize Firebase Auth for that app immediately
  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
  
  export { app, auth, getApp, getAuth };
