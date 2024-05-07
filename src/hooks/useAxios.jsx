import axios from "axios";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase.config";
import { useEffect } from "react";

const secureAxios = axios.create({
  baseURL: "https://car-doctor-server-ecru-three.vercel.app",
  withCredentials: true,
});

const useAxios = () => {
  useEffect(() => {
    secureAxios.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        if (error.response?.status === 401) {
          console.log("Unauthorized");
          signOut(auth).then(() => {
            console.log("sccessfull logout");
          });
        } else if (error.response?.status === 403) {
          console.log("Forbidden access");
          signOut(auth).then(() => {
            console.log("sccessfull logout");
          });
        }
      },
    );
  }, []);

  return secureAxios;
};

export default useAxios;
