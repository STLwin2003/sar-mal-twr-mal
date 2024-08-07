import { useContext, createContext, useState } from "react";

const createAdmin = createContext();

export function useAdmin() {
  return useContext(createAdmin);
}

export default function AdminProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [rating, setRating] = useState([]);
  const [event, setEvent] = useState([]);
  return (
    <createAdmin.Provider
      value={{
        users,
        setUsers,
        comments,
        setComments,
        carousel,
        setCarousel,
        rating,
        setRating,
        event,
        setEvent,
      }}
    >
      {children}
    </createAdmin.Provider>
  );
}
