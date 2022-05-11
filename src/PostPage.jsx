import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "./context/DataContext";
import { useNavigate } from "react-router-dom";
import api from "./api/posts";
import "./postPage.css"

export default function PostPage() {
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  const history = useNavigate();

  async function handleDelete(id) {
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter((post) => post.id !== id);
      setPosts(postsList);
      history("/");
    } catch (err) {
      console.log(`Error:${err.message}`);
    }
  }

  return (
    <main>
      <article>
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="pDate">{post.datetime}</p>
            <p className="textArea">{post.body}</p>

            {/* <Link end to={`edit/${post.id}`}> */}
            <Link to={`/edit/${post.id}`}>
              <button className="btnEdit">Edit Post</button>
            </Link>

            <button className="btnDelete" onClick={() => handleDelete(post.id)}>Delete Post</button>
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to="/">Please Visit to Our Homepage!</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
}
