import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

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

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  return <FirebaseContext.Provider>{props.children}</FirebaseContext.Provider>;
};
