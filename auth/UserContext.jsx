import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";

export const UserContext = createContext();

export const Axios = axios.create({
  baseURL: "http://localhost:80/Seenima-project/php-auth-api/",
});

export const AuthProvider = ({ children }) => {
  const [theUser, setUser] = useState(null);
  const [wait, setWait] = useState(false);

  const loginUser = async ({ email, password }) => {
    setWait(true);
    try {
      const { data } = await Axios.post("login.php", {
        email,
        password,
      });
      if (data.success && data.token) {
        localStorage.setItem("loginToken", data.token);
        setWait(false);
        return { success: 1 };
      }
      setWait(false);
      return { success: 0, message: data.message };
    } catch (err) {
      setWait(false);
      return { success: 0, message: "Server Error!" };
    }
  };

  const loggedInCheck = async () => {
    const loginToken = localStorage.getItem("loginToken");
    Axios.defaults.headers.common["Authorization"] = "Bearer " + loginToken;
    if (loginToken) {
      const { data } = await Axios.get("getUser.php");
      if (data.success && data.user) {
        setUser(data.user);
        console.log("Logged in");
        return;
      }
      setUser(null);
      console.log(data);
    }
  };

  useEffect(() => {
    async function asyncCall() {
      await loggedInCheck();
    }
    asyncCall();
  }, []);

  const logout = () => {
    localStorage.removeItem("loginToken");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        wait,
        theUser,
        loggedInCheck,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(UserContext);
};
