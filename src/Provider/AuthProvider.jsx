import React, { createContext, useState } from 'react';
import app from '../Firbase/firebase.init';
import { getAuth,GoogleAuthProvider } from 'firebase/auth';
const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
     const provider = new GoogleAuthProvider();
     const [user,setUser] = useState(null)
     const [loading,setLoading] = useState(true)








     const Authdata = {
    


}
    return <AuthContext value={Authdata} >{children}</AuthContext>
};

export default AuthProvider;