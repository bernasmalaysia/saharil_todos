import {useContext} from "react";
import DataContext from "./context/DataContext";
import "./footer.css"

export default function Footer() {
  const today = new Date();
  const { posts} = useContext(DataContext)
  return (
    <footer>
      <p>{posts.length} List {posts.length === 1 ? "item" : "items"}</p>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
}
