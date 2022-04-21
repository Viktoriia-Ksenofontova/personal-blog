import React, { useState } from 'react';
import { useFela } from 'react-fela';
import {
  useAppDispatch,
  // , useAppSelector
} from 'src/redux/hooks';

import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { Button, Form, View, Text } from '../../components';
import { labelRule, inputRule } from './CreatePost.style';
import { CreateCommentIcon } from '../../components/Image';
import { useThemeContext } from '../../store/hooks';

import { createPost } from '../../redux/posts/postsOperations';
// import { getActivePost } from '../../redux/posts/postsSelectors';

const CreatePost = observer(() => {
  const navigate = useNavigate();
  const { css } = useFela();
  const dispatch = useAppDispatch();
  // const activePost = useAppSelector(getActivePost);

  const { theme } = useThemeContext();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(createPost(title, body));
    navigate(`/posts`);
    // navigate(`/posts/:${activePost.id}`);
  };

  return (
    <View variant="container" padding="20px">
      <View
        variant="content"
        gap="20px"
        justifyContent="center"
        margin="0 0 20px"
      >
        <CreateCommentIcon />
        <CreateCommentIcon size="large" iconColor="accent" />
        <CreateCommentIcon size="small" />

        <Text as="h2" variant="heading2">
          Add a New Post
        </Text>
      </View>

      <Form handleSubmit={handleSubmit}>
        <label htmlFor="title" className={css(labelRule(theme))}>
          Title:
          <input
            type="text"
            required
            value={title}
            id="title"
            onChange={e => setTitle(e.target.value)}
            className={css(inputRule(theme))}
          />
        </label>
        <label htmlFor="body" className={css(labelRule(theme))}>
          Text:
          <textarea
            required
            value={body}
            id="body"
            rows={6}
            onChange={e => setBody(e.target.value)}
            className={css(inputRule(theme))}
          />
        </label>
        <Button type="submit" text="Add Post" />
      </Form>
    </View>
  );
});

export default CreatePost;
