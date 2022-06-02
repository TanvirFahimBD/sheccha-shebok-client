import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut, createUserWithEmailAndPassword,signInWithEmailAndPassword 
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError("")
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const registerUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user", user)
        setUser(user)
        setError("")
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const loginUser = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setUser(user)
        setError("")
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage)
    })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        setError("")
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
       })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  return {
    signInUsingGoogle,
    logOut,
    user,
    isLoading, registerUser,loginUser,setError,error
  };
};

export default useFirebase;
