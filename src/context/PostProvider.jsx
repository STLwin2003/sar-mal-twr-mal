import { useContext, createContext, useState } from "react";

const postsContext = createContext();
export function usePosts() {
  return useContext(postsContext);
}

export default function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  return (
    <postsContext.Provider
      value={{
        posts,
        setPosts,
        comments,
        setComments,
      }}
    >
      {children}
    </postsContext.Provider>
  );
}
