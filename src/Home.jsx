import React, { useContext } from "react";
import DataContext from "./context/DataContext";
import Feed from "./Feed";

export default function Home() {
  const { searchResults, fetchError, isLoading } = useContext(DataContext);
  return (
    <main className="home">
      {/* {posts.length ? (
            <Feed posts={posts} />
        ) : (
            <p>No Posts to Display</p>
        )} */}
      {isLoading && <p>Loading Posts...</p>}
      {!isLoading && fetchError && <p>{fetchError}</p>}
      {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults} /> : <p>No Posts to Display..</p>)}
    </main>
  );
}
