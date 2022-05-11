import { createContext, useEffect, useState } from "react";
// import useWindowSize from "../hooks/useWindowSize";
import useAxiosFetch from "../hooks/useAxiosFetch";
// import { format } from "date-fns";
// import { useNavigate } from "react-router-dom";
// import api from "../api/posts";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
//   const [postTitle, setPostTitle] = useState("");
//   const [postBody, setPostBody] = useState("");
//   const [editTitle, setEditTitle] = useState("");
//   const [editBody, setEditBody] = useState("");

//   const history = useNavigate();

//   const { width } = useWindowSize();
  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3007/posts"
  );

  useEffect(() => {
    setPosts(data);
  }, [data]);

  useEffect(() => {
    const filterResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    // filterResults();

    setSearchResults(filterResults.reverse());
  }, [posts, search]);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
//     const datetime = format(new Date(), "MMMM dd, yyyy pp");
//     const newPost = { id, title: postTitle, datetime, body: postBody };

//     try {
//       const response = await api.post("/posts", newPost);
//       const allPosts = [...posts, response.data];

//       setPosts(allPosts);
//       setPostTitle("");
//       setPostBody("");
//       history("/");
//     } catch (err) {
//       console.log(`Error:${err.message}`);
//     }
//   }

//   async function handleDelete(id) {
//     try {
//       await api.delete(`/posts/${id}`);
//       const postsList = posts.filter((post) => post.id !== id);
//       setPosts(postsList);
//       history("/");
//     } catch (err) {
//       console.log(`Error:${err.message}`);
//     }
//   }

//   async function handleEdit(id) {
//     const datetime = format(new Date(), "MMMM dd, yyyy pp");
//     const updatedPost = { id, title: editTitle, datetime, body: editBody };

//     try {
//       const response = await api.put(`/posts/${id}`, updatedPost);
//       setPosts(
//         posts.map((post) => (post.id === id ? { ...response.data } : post))
//       );
//       setEditTitle("");
//       setEditBody("");
//       history("/");
//     } catch (err) {
//       console.log(`Error:${err.message}`);
//     }
//   }

  return (
    <DataContext.Provider
      value={{
        // width,
        search,
        setSearch,
        searchResults,
        fetchError,
        isLoading,
        // postTitle,
        // setPostTitle,
        // postBody,
        // setPostBody,
        // handleSubmit,
        posts,
        setPosts,
        // handleEdit,
        // editTitle,
        // editBody,
        // setEditTitle,
        // setEditBody,
        // handleDelete,
      }}
    >
      {/* pass props */}
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
