import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "./context/DataContext";
import "./nav.css"

export default function Nav() {
  const { search, setSearch } = useContext(DataContext);
  return (
    <nav className="nav">
      <form action="" className="formSearch">
        <label htmlFor="search">Search Todo</label>
        <input
          type="text"
          id="search"
          placeholder="Search Todo"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <ul className="menu">
        <li>
          <Link style={{textDecoration:'none', color:'black'}} to="/">Home</Link>
        </li>
        <li>
          <Link style={{textDecoration:'none',color:'black'}} to="/post">Post</Link>
        </li>
        <li>
          <Link style={{textDecoration:'none', color:'black'}} to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
