import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, getIdToken
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  // const navigate = useNavigate()

  const signInUsingGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        saveUser(user.email, user.displayName, "PUT")
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

  const registerUser = (email, password, name, url) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName: name, photoURL: url }
        setUser(newUser)
        saveUser(email, name, "POST")
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: url
        }).then(() => {
        }).catch((error) => {
        });
        setError("")
        // navigate("/")
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
        getIdToken(user)
          .then(idToken => {
            setToken(idToken)
            // console.log(idToken)
          })
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName }
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email || ""}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setAdmin(data.admin)
      })
  }, [user?.email])


  return {
    signInUsingGoogle,
    logOut,
    user,
    isLoading, registerUser, loginUser, setError, error, admin, token
  };
};

export default useFirebase;
