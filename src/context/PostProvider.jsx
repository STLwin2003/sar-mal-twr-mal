import { useContext, createContext, useState } from "react";

const postsContext = createContext();
export function usePosts() {
  return useContext(postsContext);
}

export default function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [pageLoading, setPageLoading] = useState(false);
  return (
    <postsContext.Provider
      value={{
        posts,
        setPosts,
        comments,
        setComments,
        pageLoading,
        setPageLoading,
      }}
    >
      {children}
    </postsContext.Provider>
  );
}
