import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDYd4WT3d_xuy_inUMzO8pTmmI5a5z1GTo',
  authDomain: 'crwn---db.firebaseapp.com',
  projectId: 'crwn---db',
  storageBucket: 'crwn---db.appspot.com',
  messagingSenderId: '1007290819244',
  appId: '1:1007290819244:web:8e645f8384bde030c73509',
  measurementId: 'G-6MYNEPETP7',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
