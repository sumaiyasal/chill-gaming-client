import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');
 

    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
          setIsDarkMode(true);
        }
      }, []);
      const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
      };
      useEffect(() => {
        if (isDarkMode) {
          document.body.classList.add("dark");
          localStorage.setItem("theme", "dark"); // Persist in localStorage
        } else {
          document.body.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }, [isDarkMode]);


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
      const [isChecked, setIsChecked] = useState(false);
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
        isChecked, setIsChecked,
         email,
        setEmail,
        user,
        setUser,
        signout,
        isDarkMode, toggleTheme 

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;