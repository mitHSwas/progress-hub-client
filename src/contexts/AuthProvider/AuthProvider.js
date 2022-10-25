import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithPopup, updateProfile } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const googleSignUp = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const githubSignUp = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const facebookSignUp = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("current user", currentUser);
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const userInfo = {
        user,
        googleSignUp,
        githubSignUp,
        facebookSignUp,
        createUser,
        updateUserProfile,
        verifyEmail,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;