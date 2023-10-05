import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext()

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] =useState(null)

    const[loading, setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
      return  createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }

    const logOut = () =>{
        setLoading(true)
       return signOut(auth)
    }

    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            // console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        createUser,
        login,
        logOut,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo }>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children:PropTypes.node
};


export default AuthProvider;