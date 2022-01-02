import React, { useState } from 'react';
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';

const CreatePost = observer(({ store }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    store.createNewPost(title, body);
    navigate(`posts/`);
  }

  return (
    <div>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title
          <input type="text" required
            value={title}
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor='body'>
          Text:
          <textarea required
            value={body}
            id="body"
            onChange={(e) => setBody(e.target.value)}
          />
        </label>

        <button type="submit">Add Post</button>
      </form>
    </div>
  )
})

export default CreatePost;