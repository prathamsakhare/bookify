import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";

// ! Authentication
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

// ! Firestore
import { getFirestore, collection, addDoc } from "firebase/firestore";

// ! Firebase Storage
import {getStorage, ref, uploadBytes} from 'firebase/storage';


const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyA_EOs2q8V_Hi0pOVdyz18u5WjgcDTk-xE",
  authDomain: "bookify-77802.firebaseapp.com",
  projectId: "bookify-77802",
  storageBucket: "bookify-77802.appspot.com",
  messagingSenderId: "84000668213",
  appId: "1:84000668213:web:47ef50b0843a887e50cf7c",
};

// ! Initializing Application
const firebaseApp = initializeApp(firebaseConfig);

// ! Authentication instance
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

// ! Firestore instance
const firestore = getFirestore(firebaseApp);

// ! Storage instance
const storage = getStorage(firebaseApp);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const signUpUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  const signInUserWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);

  const signInWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

  const isLoggedIn = user ? true : false;
  console.log(user)

  const handleCreateNewListing = async (name, isbnNumber, price, coverPic) => {
    const imageRef = ref(storage, `uploads/images/${Date.now()}-${coverPic.name}`);
    const uploadResult = await uploadBytes(imageRef, coverPic);
    return await addDoc(collection(firestore, 'books'), {
      name,
      isbnNumber,
      price,
      imageURL : uploadResult.ref.fullPath,
      userID : user.uid,
      userEmail : user.email,
      displayName : user.displayName,
      photoURL : user.photoURL
    })

  };

  return (
    <FirebaseContext.Provider
      value={{
        signUpUserWithEmailAndPassword,
        signInUserWithEmailAndPassword,
        signInWithGoogle,
        isLoggedIn,
        handleCreateNewListing,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
