import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const googleProvider = new GoogleAuthProvider();
const loginwithgoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const signout = () => {
        setLoading(true);
        // console.log('User signed out successfully');
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Sign-out successful.")
            setUser(null)
          }).catch((error) => {
            // An error happened.
            console.log("an error ");
          });
        
        
        
      }; 
   
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        });
        return () => {
          unsubscribe();
        };
      }, []);
    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        loginwithgoogle,
         email,
        setEmail,
        user,
        setUser,
        signout,
        loading

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;