import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-cycle
import { LoadUser } from "./functions/ReconnectApi";

const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState({
    admin: null,
    email: null,
    firstname: null,
    lastname: null,
    id: null,
  });

  useEffect(() => {
    if (
      !user.email &&
      document.cookie.match(import.meta.env.VITE_NAME_COOKIE)
    ) {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith(import.meta.env.VITE_NAME_COOKIE))
        ?.split("=Bearer%20")[1];
      const payload = JSON.parse(
        window.atob(token.match(/(?<=\.)(.*?)(?=\.)/g))
      );
      LoadUser(payload.sub).then((returnuser) => {
        if (returnuser.status === 401) {
          setUser({
            admin: null,
            email: null,
            firstname: null,
            lastname: null,
            id: null,
          });
          navigate("/", { replace: true });
        } else {
          setUser({
            admin: returnuser.admin,
            email: returnuser.email,
            firstname: returnuser.firstname,
            lastname: returnuser.lastname,
            id: returnuser.id,
          });
        }
        setIsLoaded(true);
      });
    } else {
      setIsLoaded(true);
    }
  }, []);

  const login = async (data) => {
    setUser(data);
    navigate("/user/profile", { replace: true });
  };

  const logout = () => {
    document.cookie = `${
      import.meta.env.VITE_NAME_COOKIE
    }= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`;
    setUser("user", null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={value}>
      {isLoaded && children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
