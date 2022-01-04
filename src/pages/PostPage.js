import React, { useState, useEffect } from 'react';
import { useFela } from 'react-fela';
import { useParams } from "react-router-dom";
import { fetchPosts, createComment } from "../services/postsApi";
import Button from '../components/Button/Button';
import List from "../components/List/List";
import CommentItem from '../components/CommentItem/CommentItem';
import Form from '../components/Form/Form';
import Container from '../components/Container/Container';


export default function PostPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [comments, setComments] = useState([]);
  const [status, setStatus] = useState("");
  const [newComment, setNewComment] = useState("");
  const { postId } = useParams();

  const { css } = useFela();

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
    createComment(postId, newComment).then(res => {
      setComments([...comments, res.comment]);
      setNewComment("")
    })
  }

  return (
    <Container>
      {status === "pending" && <div>Loading...</div>}
      
      <h2>{title}</h2>
      <p className={css({
        textAlign:"left"
      })}>
        {body}
      </p>

      <h3>Comments:</h3>
      
      {comments.length === 0 ?
        <p>There are no comments here yet</p> :
        <List>
          {comments.map((comment) => (
            <li key={comment.id}>
              <CommentItem body={comment.body} />
            </li>
          ))}
        </List>
      }

      <Form handleSubmit={handleSubmit}>
        <label htmlFor='comment' className={css({
          display: 'flex',
          width: '100%',
          alignItems: 'top',
          textAlign: 'left',
          marginBottom: '20px'
        })}>
          Your comment:
          <textarea required
            value={newComment}
            id="comment"
            onChange={(e) => setNewComment(e.target.value)}
            className={css({
              marginLeft: '20px',
              width: '100%',
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              borderBottomColor: 'grey',
              borderBottomStyle: 'solid',
              borderBottomWidth: '2px',
              outline:'none'
            })}
          />
        </label>
        
        <Button type="submit">Add comment</Button>
      </Form>
      
    </Container>
  
  )
}

