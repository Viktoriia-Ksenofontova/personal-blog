import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { fetchPosts } from "../services/postsApi";


export default function PostPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [comments, setComments] = useState([]);
  const [status, setStatus] = useState("");
  const [newComment, setNewComment] = useState("");
  const { postId } = useParams();
  
  useEffect(() => {
    fetchPosts(`/posts/${postId.slice(1)}?_embed=comments`).then(res => {
      setTitle(res.posts.title);
      setBody(res.posts.body);
      setComments(res.posts.comments);
      setStatus(res.status)
    })
  }, [postId]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    
    <div>
      {status==="pending" && <div>Loading...</div>}
      
      <h2>{title}</h2>
      <p>{body}</p>
      <h3>Comments:</h3>
      
      {comments.length === 0 ?
        <p>There are no comments here yet</p> :
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
        }

      <form onSubmit={handleSubmit}>
        <label htmlFor='comment'>
          Your comment:
          <textarea required
            value={newComment}
            id="comment"
            onChange={(e) => setNewComment(e.target.value)}
          />
        </label>

        <button type="submit">Add comment</button>
      </form>
      
    </div>
  
  )
}

