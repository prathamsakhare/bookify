import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyA_EOs2q8V_Hi0pOVdyz18u5WjgcDTk-xE",
  authDomain: "bookify-77802.firebaseapp.com",
  projectId: "bookify-77802",
  storageBucket: "bookify-77802.appspot.com",
  messagingSenderId: "84000668213",
  appId: "1:84000668213:web:47ef50b0843a887e50cf7c",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider()

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, user => {
      if(user){
        setUser(user)
      }else{
        setUser(null)
      }
    })
  }, [])

    const signUpUserWithEmailAndPassword = (email, password) => createUserWithEmailAndPassword(firebaseAuth, email, password)

    const signInUserWithEmailAndPassword = (email, password) => signInWithEmailAndPassword(firebaseAuth, email, password)

    const signInWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider)

    const isLoggedIn = user ? true : false;

  return <FirebaseContext.Provider value={{signUpUserWithEmailAndPassword, signInUserWithEmailAndPassword, signInWithGoogle, isLoggedIn}}>{props.children}</FirebaseContext.Provider>;
};
