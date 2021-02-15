import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCN-P2mgp4zFGKvDoWxAmNwmrfAVrBOPlU',
  authDomain: 'howdy-db709.firebaseapp.com',
  projectId: 'howdy-db709',
  storageBucket: 'howdy-db709.appspot.com',
  messagingSenderId: '536452188338',
  appId: '1:536452188338:web:f3f7783ac8042ea4aaa1ab',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export { db, auth };
