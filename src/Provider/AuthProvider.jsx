/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,   } from "firebase/auth";
import app from "../Firebase/firebase.config";




export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const LogOut = () => {
        return signOut(auth);
    }
    
    const googleSignIn = () =>{
        return signInWithPopup(auth,googleProvider);
    }
    

    useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            // console.log("CurrentUser",currentUser);
            setLoading(false)

        });
        return ( ) => {
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        LogOut,
        
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;