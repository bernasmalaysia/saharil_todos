import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  return (
    <article>
      <Link style={{textDecoration:'none'}} to={`post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className="pDate">{post.datetime}</p>
      </Link>
      <p>{post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}</p>
    </article>
  );
}
