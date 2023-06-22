import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile,getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,GoogleAuthProvider,signInWithPopup,GithubAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const GoogleProvider = new GoogleAuthProvider();
const GitProvider = new GithubAuthProvider();
const auth = getAuth(app)
const AuhtProvider = ({children}) => {
    const [user, setUser] =useState(null);

    const[loading, setLoading] = useState(true)

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);

    }
    const signInWithEmail =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const singInWithGoogle =() => {
        return signInWithPopup(auth,GoogleProvider);
      };
    const singInWithGithub =() => {
        return signInWithPopup(auth,GitProvider);
      };
    
    const updateProfile =(name,photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
      };
    
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,loggedUser=>{
            console.log('fdj',loggedUser)
            setUser(loggedUser)
            setLoading(false);
        })
        return()=>{
            unsubscribe();
        }
    },[])

    const authInfo ={
        user,
        loading,
        createUser,
        signInWithEmail,
        singInWithGoogle,
        singInWithGithub,
        logOut,
        updateProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuhtProvider;