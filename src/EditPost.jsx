import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "./context/DataContext";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import api from "./api/posts";
import "./editPost.css";

export default function EditPost() {
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  const history = useNavigate();

  async function handleEdit(id) {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = { id, title: editTitle, datetime, body: editBody };

    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle("");
      setEditBody("");
      history("/");
    } catch (err) {
      console.log(`Error:${err.message}`);
    }
  }

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <main>
      {editTitle && (
        <>
          <h2>Edit Todo</h2>
          <form
            className="formEdit"
            action=""
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="labelTitle" htmlFor="postTitle">
              Title:
            </label>
            <input
              className="postTitle"
              type="text"
              id="postTitle"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label className="labelBody" htmlFor="postBody">
              Post:
            </label>
            <textarea
            className="textBody"
              name=""
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />

            <button className="btnEditSubmit" type="submit" onClick={() => handleEdit(post.id)}>
              Submit
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h2>Page Not Found</h2>
          <p>Well, that's disappointing.</p>
          <p>
            <Link to="/">Visit Our Hompage!</Link>
          </p>
        </>
      )}
    </main>
  );
}
