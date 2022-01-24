import React, { useState, useLayoutEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useFela } from 'react-fela';
import { useParams, useNavigate } from 'react-router-dom';

import { Container, Form, CommentItem, List, Button, Text, Loader, View } from '../../components';
import useStore from '../../store/hooks';
import { DeleteIcon } from '../../components/Image';
import { labelRuleStyle, textareaRuleStyle, buttonDeleteRuleStyle } from './PostPage.style';

const PostPage = observer(() => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const correctPostId = Number(postId.slice(1));
  const { css } = useFela();

  const { stateContext } = useStore();
  const { theme, store } = stateContext;

  const [currentPost, setCurrentPost] = useState({});
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [comments, setComments] = useState([]);

  const [newComment, setNewComment] = useState('');

  useLayoutEffect(() => {
    store.fetchCommentsAction(correctPostId);
  }, [store, correctPostId]);

  useLayoutEffect(() => {
    if (store.status === 'success' || 'created') {
      setCurrentPost(store.postForRender);
    }
  }, [store.postForRender, store.status]);

  // console.log('store.postForRender.data', currentPost);

  useLayoutEffect(() => {
    if (currentPost && (store.status === 'success' || 'created')) {
      setTitle(currentPost.title);
      setBody(currentPost.body);
      setComments(currentPost.comments);
    }
  }, [currentPost, store.status]);

  const handleSubmit = e => {
    e.preventDefault();
    store.createNewComment(correctPostId, newComment);
    setNewComment('');
  };

  const handleDeleteBtnClick = e => {
    e.preventDefault();
    store.removePost(correctPostId);
    navigate(`/`);
  };

  const handleTextareaChange = e => {
    e.preventDefault();
    setNewComment(e.target.value);
  };

  return (
    <Container>
      {store.status === 'pending' ? (
        <Loader />
      ) : (
        <>
          <View variant="content" justifyContent="space-between">
            <Text as="h2" variant="heading2">
              {title}
            </Text>
            <button
              type="button"
              onClick={handleDeleteBtnClick}
              className={css(buttonDeleteRuleStyle(theme))}
            >
              <DeleteIcon />
            </button>
          </View>

          <Text as="p" styles={{ margin: '0 0 20px' }}>
            {body}
          </Text>

          <Text as="h3" variant="heading3">
            Comments:
          </Text>

          {comments?.length === 0 && (
            <Text as="p" variant="small" styles={{ margin: '10px 0 20px' }}>
              There are no comments here yet
            </Text>
          )}
          {comments?.length > 0 && (
            <List>
              {comments.map(comment => (
                <li key={comment.id}>
                  <CommentItem body={comment.body} />
                </li>
              ))}
            </List>
          )}

          <Form handleSubmit={handleSubmit}>
            <label htmlFor="comment" className={css(labelRuleStyle(theme))}>
              Your comment:
              <textarea
                required
                value={newComment}
                id="comment"
                onChange={handleTextareaChange}
                className={css(textareaRuleStyle(theme))}
              />
            </label>
            <Button type="submit" text="Add comment" />
          </Form>
        </>
      )}
    </Container>
  );
});

export default PostPage;
