import { useEffect, useState } from "react";

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true)
    

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setIsloading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setIsloading(true)
        signOut(auth).then(() => {

        }).finally(() => setIsloading(false))
    }

    const emailPassSignUp = ( email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

            })

    }

    const handlerToEmailLogin = (email, password) => {
        setIsloading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsloading(false)
        });
        return () => unsubscribed;
    }, [])
    return {
        user,
        isLoading,
        signInWithGoogle,
        handlerToEmailLogin,
        emailPassSignUp,
        logOut,
    }
}

export default useFirebase;
