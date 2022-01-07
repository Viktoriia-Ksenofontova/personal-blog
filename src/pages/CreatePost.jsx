import React, { useState } from 'react';
import { useFela } from 'react-fela';
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import Button from "../components/Button";
import Form from '../components/Form';
import Icon from '../assets/images/comment-with-a-pencil.svg';

const labelRule = () => ({
  display: 'flex',
  fontSize: '16px',
  width: '100%',
  marginBottom: '20px',
  textAlign: 'left',
  alignItems:'top'
});

const inputRule = () => ({
  marginLeft: "20px",
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  borderBottomColor: 'grey',
  borderBottomStyle: 'solid',
  borderBottomWidth: '2px',
  outline: 'none',
  width: '100%'
})


const CreatePost = observer(({ store }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  
  const { css } = useFela();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    store.createNewPost(title, body);
    navigate(`posts/`);
  }

  return (
    <Container>
      <div className={css({display:'flex', justifyContent:'center'})}>
      <img src={Icon} alt="pencil" width= '30px'/>
        <h2 className={css({ marginLeft: '20px' })}>
          Add a New Post
        </h2>
      </div> 
      <Form handleSubmit={handleSubmit}>
        <label htmlFor="title" className={css(labelRule)}>
          Title:
          <input type="text" required
            value={title}
            id="title"
            onChange={(e) => setTitle(e.target.value)} 
            className={css(inputRule)}
          />
        </label>
        <label htmlFor='body'className={css(labelRule)}>
          Text:
          <textarea required
            value={body}
            id="body"
            rows={6}
            onChange={(e) => setBody(e.target.value)}
            className={css(inputRule)}
          />
        </label>
      
        <Button type="submit">Add Post</Button>
        
      </Form>
      
    </Container>
  )
})

export default CreatePost;