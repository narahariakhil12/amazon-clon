import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCidzDruy4CK1PgL8F-wOrfZhhVEiiq_QE",
  authDomain: "clone-6b1a4.firebaseapp.com",
  projectId: "clone-6b1a4",
  storageBucket: "clone-6b1a4.appspot.com",
  messagingSenderId: "679520960448",
  appId: "1:679520960448:web:9b53623755a49756529225",
  measurementId: "G-T0FQN9DNQT",
});

const auth = firebase.auth();

export { auth };
