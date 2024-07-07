import { useContext, createContext, useState } from "react";

const postsContext = createContext();
export function usePosts() {
  return useContext(postsContext);
}

export default function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  return (
    <postsContext.Provider
      value={{
        posts,
        setPosts,
      }}
    >
      {children}
    </postsContext.Provider>
  );
}
