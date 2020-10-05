import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const configKey = {
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID,
    apiKey: "AIzaSyCCAu8Lag1GIW-Pl6Ny5NNjM2kT9gHfgew",
    authDomain: "netflix-e0b32.firebaseapp.com",
    databaseURL: "https://netflix-e0b32.firebaseio.com",
    projectId: "netflix-e0b32",
    storageBucket: "netflix-e0b32.appspot.com",
    messagingSenderId: "90261980316",
    appId: "1:90261980316:web:85426d952bbd476f1b1959"
};

const firebase = Firebase.initializeApp(configKey);

export { firebase };