import React, { useState, useContext } from 'react';
import { useFela } from 'react-fela';
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import { Container, Button, Form, Text } from '../../components';
import ThemeContext from "../../context/ThemeContext";
import { labelRule, inputRule } from './CreatePost.style';
import  { CreateCommentIcon } from '../../components/Image';


const CreatePost = observer(({ store }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { css } = useFela();

  const handleSubmit = (e) => {
    e.preventDefault();
    store.createNewPost(title, body).then(res =>
      navigate(`/posts/:${res.post.id}`)
    );
  }

  return (
    <Container>
      <div className={css({display:'flex', justifyContent:'center', alignItems:"flex-start"})}>
      <CreateCommentIcon />
      <CreateCommentIcon size="large" iconColor="accent"/>
      <CreateCommentIcon size="small"/>

      <Text as='h2' styles={{ marginLeft: '20px' }} variant="heading2">
        Add a New Post
      </Text>
      </div> 

      <Form handleSubmit={handleSubmit}>
        <label htmlFor="title" className={css(labelRule(theme))}>
          Title:
          <input type="text" required
            value={title}
            id="title"
            onChange={(e) => setTitle(e.target.value)} 
            className={css(inputRule(theme))}
          />
        </label>
        <label htmlFor='body'className={css(labelRule(theme))}>
          Text:
          <textarea required
            value={body}
            id="body"
            rows={6}
            onChange={(e) => setBody(e.target.value)}
            className={css(inputRule(theme))}
          />
        </label>
        <Button type="submit" text="Add Post"/>
      </Form>
    </Container>
  )
})

export default CreatePost;