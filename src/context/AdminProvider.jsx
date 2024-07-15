import { useContext, createContext, useState } from "react";

const createAdmin = createContext();

export function useAdmin() {
  return useContext(createAdmin);
}

export default function AdminProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  return (
    <createAdmin.Provider value={{ users, setUsers, comments, setComments }}>
      {children}
    </createAdmin.Provider>
  );
}
