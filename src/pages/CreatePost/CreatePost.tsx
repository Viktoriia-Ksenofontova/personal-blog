import React, { useState, useCallback } from 'react';
import { useFela } from 'react-fela';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Form, View, Text } from '../../components';
import { CreateCommentIcon } from '../../components/Image';

import { getTheme } from '../../redux/theme/themeSelectors';
import { createPost } from '../../redux/posts/postsOperations';
import { labelRule, inputRule } from './CreatePost.style';
import '../../translations/i18n';

const CreatePost = () => {
  const navigate = useNavigate();
  const { css } = useFela();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const theme = useAppSelector(getTheme);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (title !== '' && body !== '') {
        dispatch(createPost(title, body));
        navigate(`/posts`);
      }
    },
    [dispatch, title, body, navigate],
  );

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
          {t('createPostTitle')}
          {/* Add a New Post */}
        </Text>
      </View>

      <Form handleSubmit={handleSubmit}>
        <label htmlFor="title" className={css(labelRule(theme))}>
          {t('title')}
          {/* Title: */}
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
          {t('text')}
          {/* Text: */}
          <textarea
            required
            value={body}
            id="body"
            rows={6}
            onChange={e => setBody(e.target.value)}
            className={css(inputRule(theme))}
          />
        </label>
        <Button type="submit" text={t('buttonAdd')} />
      </Form>
    </View>
  );
};

export default CreatePost;
