import React, { useState, useContext } from 'react';
import { useFela } from 'react-fela';
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import { Container, Button, Form, Text } from '../../components';
import Icon from '../../assets/images/comment-with-a-pencil.svg';
import ThemeContext from "../../context/ThemeContext";
import palette from '../../assets/colors';

const CreatePost = observer(({ store }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { css } = useFela();

  const labelRule = () => ({
    display: 'flex',
    fontSize: '16px',
    fontWeight: '500',
    width: '100%',
    marginBottom: '20px',
    textAlign: 'left',
    alignItems: 'top',
    color: palette[theme].text
  });

  const inputRule = () => ({
    marginLeft: "20px",
    padding:"10px",
    border: 'none',
    borderRadius:'20px',
    boxShadow: `0px 0px 6px ${palette[theme].shadowColor}`,
    outline: 'none',
    width: '100%'
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    store.createNewPost(title, body).then(res =>
      navigate(`/posts/:${res.post.id}`)
    );
  }

  return (
    <Container>
      <div className={css({display:'flex', justifyContent:'center', alignItems:"flex-start"})}>
      <img src={Icon} alt="pencil" width= '30px'/>
        <Text as='h2' styles={{ marginLeft: '20px' }} variant="heading2">
          Add a New Post
        </Text>
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
        <Button type="submit" text="Add Post"/>
      </Form>
    </Container>
  )
})

export default CreatePost;