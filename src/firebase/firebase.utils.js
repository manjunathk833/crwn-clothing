import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import  'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCSVzRkrlKzFYx876QHnPN_iKdva03COLY",
    authDomain: "crwn-clothing-8796c.firebaseapp.com",
    projectId: "crwn-clothing-8796c",
    storageBucket: "crwn-clothing-8796c.appspot.com",
    messagingSenderId: "807801847371",
    appId: "1:807801847371:web:59fc8545e540e9730417ce"
  };


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user.', error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;