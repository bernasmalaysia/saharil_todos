// import Header from "./Header";
// import Nav from "./Nav";
// import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

import EditPost from "./EditPost";
import { DataProvider } from "./context/DataContext";
import "./app.css";

function App() {
  return (
    <>
      <div className="App">
      <DataProvider>
        {/* <Header />
      <Nav /> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="post">
              <Route index element={<NewPost />} />

              <Route path=":id" element={<PostPage />} />
            </Route>

            <Route path="edit/:id" element={<EditPost />} />

            <Route path="about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </DataProvider>
      </div>
    </>
  );
}

export default App;
