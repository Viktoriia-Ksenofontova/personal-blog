import React, { useEffect, useState } from "react";
import fetchPosts from "../services/postsApi";

export default function LatestPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then((res) => setPosts(res));
  }, []);
  return (
    <div>
      <h2>Latest posts</h2>
        <ul>
          {posts && posts.map(({ id, title, body }) => (
              <li key={id}>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            )
          )}
        </ul>
    </div>
  )
};