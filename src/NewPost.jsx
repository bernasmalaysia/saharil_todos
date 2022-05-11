import React, { useContext, useState } from "react";
import DataContext from "./context/DataContext";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import api from "./api/posts";
import "./newPost.css";


export default function NewPost() {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const { posts, setPosts } = useContext(DataContext);

  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };

    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];

      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      history("/");
    } catch (err) {
      console.log(`Error:${err.message}`);
    }
  }
  
  return (
    <main>
      <h2>New Todo</h2>
      <form className="formPost" action="" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
        className="postTitle"
          type="text"
          id="postTitle"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
        className="postBody"
          name=""
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />

        <button className="btnPostSubmit" type="submit">Submit</button>
      </form>
    </main>
  );
}
