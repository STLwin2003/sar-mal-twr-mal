import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router";

const userContext = createContext();

export const useUser = () => {
  return useContext(userContext);
};

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };
  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        logout,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
