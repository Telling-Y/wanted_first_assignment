import React, { useEffect, useState } from "react";
import InfinityScroll from "../Components/InfinityScroll";

function App() {
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setCommentData(data));
  }, []);

  return (
    <>
      <InfinityScroll commentData={commentData} />
    </>
  );
}

export default App;
