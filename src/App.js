import { useState, useEffect } from 'react';
import './App.css';
import fetchPosts from './services/postsApi';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(res => setPosts(res));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>It's my blog</p>
        <ul>
          {posts.map(({ id, title, body }) => {
            return (
              <li key={id}>
                <h2>{title}</h2>
                <p>{body}</p>
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
