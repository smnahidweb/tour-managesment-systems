import React, { createContext, useEffect, useState } from 'react';
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

const Login = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
}

const UpdateProfileInfo = (updatedData)=>{
    return updateProfile(auth.currentUser,updatedData)

}

const SignInWithGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth,provider);
}


const Logout = ( )=>{
   return signOut(auth)
}

useEffect( ()=>{

  const unsubcribe =   onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false)
 
    });
    return () =>{
        unsubcribe()
    }


},[] )
console.log(user)





  const Authdata = {
    CreateUser,
    Login,
    user,
    setUser,
    loading,
    setLoading,
     Logout,
     UpdateProfileInfo,
     SignInWithGoogle
}
    return <AuthContext value={Authdata} >{children}</AuthContext>
};

export default AuthProvider;