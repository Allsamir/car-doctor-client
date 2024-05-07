import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import useAxios from "../hooks/useAxios";
export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const secureAxios = useAxios();
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        console.log(`Successfully Logout`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email;
      const loggedUser = { userEmail: userEmail };
      setLoading(false);
      setUser(currentUser);
      if (currentUser) {
        console.log(currentUser);
        secureAxios
          .post("/jwt", loggedUser)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => console.error(err));
      } else {
        secureAxios
          .post("/logout", loggedUser)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => console.error(err));
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [secureAxios]);
  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContextProvider;
