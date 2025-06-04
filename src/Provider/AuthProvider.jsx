import React, { createContext, useState } from 'react';
import app from '../Firbase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
     const provider = new GoogleAuthProvider();
     const [user,setUser] = useState(null)
     const [loading,setLoading] = useState(true)

const CreateUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
    
}







  const Authdata = {
    CreateUser,
    
}
    return <AuthContext value={Authdata} >{children}</AuthContext>
};

export default AuthProvider;