import React, { useState, useEffect, useContext } from 'react';
import { useFela } from 'react-fela';
import { useParams } from "react-router-dom";
import { fetchPosts, createComment } from "../../services/postsApi";
import { Container, Form, CommentItem, List, Button, Text } from '../../components';
import ThemeContext from "../../context/ThemeContext";
import palette from '../../assets/colors';

export default function PostPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [comments, setComments] = useState([]);
  const [status, setStatus] = useState("");
  const [newComment, setNewComment] = useState("");
  const { postId } = useParams();
  const { theme } = useContext(ThemeContext);

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
      
      <Text as='h2' styles={{textAlign:"center"}} variant='heading2'>{title}</Text>
      <Text as='p'>{body}</Text>

      <Text as='h3' variant='heading3'>Comments:</Text>
      
      {comments?.length === 0 ?
        <Text as='p'>There are no comments here yet</Text> :
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
          fontSize: '16px',
          fontWeight: '500',
          alignItems: 'top',
          textAlign: 'left',
          marginBottom: '20px',
          color: palette[theme].text
        })}>
          Your comment:
          <textarea required
            value={newComment}
            id="comment"
            onChange={(e) => setNewComment(e.target.value)}
            className={css({
              marginLeft: '20px',
              padding: '10px',
              width: '100%', 
              border: 'none',
              borderRadius:'20px',
              boxShadow: `0px 0px 6px ${palette[theme].shadowColor}`,
              outline:'none'
            })}
          />
        </label>
        
        <Button type="submit">Add comment</Button>
      </Form>
    </Container>
  )
}

