import React from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import data from "./data";

const App = () => {
  const posts = data.map((item, i) => {
    return <Post key={i} item={item} />;
  });
  return (
    <main>
      <Header />
      {posts}
    </main>
  );
};

export default App;
