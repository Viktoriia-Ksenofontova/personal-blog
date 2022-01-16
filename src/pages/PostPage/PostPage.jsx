import React, { useState, useEffect, useLayoutEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useFela } from 'react-fela';
import { useParams, useNavigate } from 'react-router-dom';

import {
  Container,
  Form,
  CommentItem,
  List,
  Button,
  Text,
} from '../../components';

import useStore from '../../store/hooks';

import DeleteIcon from '../../assets/images/deleteIcon.svg';
import palette from '../../assets/colors';

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

  useEffect(() => {
    if (store.status === 'success' || 'created') {
      setCurrentPost(store.postForRender);
    }
  }, [store.postForRender, store.status]);

  // console.log('store.postForRender.data', currentPost);

  useEffect(() => {
    if (currentPost && store.status === 'success') {
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

  const handleClick = e => {
    e.preventDefault();
    store.removePost(correctPostId);
    navigate(`/`);
  };

  const buttonDeleteRule = () => ({
    width: '30px',
    marginLeft: '50px',
    height: '30px',
    border: `1px solid ${palette[theme].accent}`,
    borderRadius: '50%',
    transition: 'all 0.4s linear',
    ':hover': { backgroundColor: palette[theme].accent },
    ':focus': { backgroundColor: palette[theme].accent },
  });

  return (
    <Container>
      {store.status === 'pending' && <div>Loading...</div>}
      {(store.status === 'success' || store.status === 'created') && (
        <>
          <div
            className={css({
              display: 'flex',
              justifyContent: 'center',
            })}
          >
            <Text as="h2" styles={{ textAlign: 'center' }} variant="heading2">
              {title}
            </Text>
            <button
              type="button"
              onClick={handleClick}
              className={css(buttonDeleteRule)}
            >
              <img src={DeleteIcon} alt="delete" />
            </button>
          </div>
          <Text as="p">{body}</Text>
        </>
      )}

      <Text as="h3" variant="heading3">
        Comments:
      </Text>

      {comments?.length === 0 && (
        <Text as="p">There are no comments here yet</Text>
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
        <label
          htmlFor="comment"
          className={css({
            display: 'flex',
            width: '100%',
            fontSize: '16px',
            fontWeight: '500',
            alignItems: 'top',
            textAlign: 'left',
            marginBottom: '20px',
            color: palette[theme].text,
          })}
        >
          Your comment:
          <textarea
            required
            value={newComment}
            id="comment"
            onChange={e => setNewComment(e.target.value)}
            className={css({
              marginLeft: '20px',
              padding: '10px',
              width: '100%',
              border: 'none',
              borderRadius: '20px',
              boxShadow: `0px 0px 6px ${palette[theme].shadowColor}`,
              outline: 'none',
            })}
          />
        </label>

        <Button type="submit" text="Add comment" />
      </Form>
    </Container>
  );
});

export default PostPage;
