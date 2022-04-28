import React, { useState, useEffect, useCallback } from 'react';
import { useFela } from 'react-fela';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { useParams, useNavigate } from 'react-router-dom';

import {
  Form,
  CommentItem,
  List,
  Button,
  Text,
  Loader,
  View,
} from '../../components';
import { DeleteIcon } from '../../components/Image';

import {
  getStatus,
  getActivePost,
  getErrorMessage,
} from '../../redux/posts/postsSelectors';
import {
  removePost,
  fetchComments,
  createNewComment,
} from '../../redux/posts/postsOperations';
import { getTheme } from '../../redux/theme/themeSelectors';

import {
  labelRuleStyle,
  textareaRuleStyle,
  buttonDeleteRuleStyle,
} from './PostPage.style';

const PostPage: React.FC = () => {
  const navigate = useNavigate();
  const { css } = useFela();
  const dispatch = useAppDispatch();

  const { postId } = useParams();
  const correctPostId = Number(postId!.slice(1));

  const theme = useAppSelector(getTheme);
  const status = useAppSelector(getStatus);
  const errorMessage = useAppSelector(getErrorMessage);
  const activePost = useAppSelector(getActivePost);

  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    dispatch(fetchComments(correctPostId));
  }, [correctPostId, dispatch]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (newComment !== '') {
        dispatch(createNewComment(correctPostId, newComment));
        setNewComment('');
      }
    },
    [correctPostId, newComment, dispatch],
  );

  const handleDeleteBtnClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      dispatch(removePost(correctPostId));
      navigate(`/`);
    },
    [dispatch, correctPostId, navigate],
  );

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setNewComment(e.target.value);
  };

  if (status === 'error') {
    return (
      <View variant="container" padding="20px">
        <Text as="p" styles={{ color: 'red', textAlign: 'center' }}>
          Something went wrong
        </Text>

        <Text as="p" styles={{ textAlign: 'center' }}>
          {errorMessage}
        </Text>
      </View>
    );
  }

  return (
    <View variant="container" padding="20px">
      {status === 'pending' ? (
        <Loader />
      ) : (
        <>
          <View variant="content" justifyContent="space-between">
            <Text as="h2" variant="heading2">
              {activePost?.title}
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
            {activePost?.body}
          </Text>

          <Text as="h3" variant="heading3">
            Comments:
          </Text>

          {activePost?.comments?.length === 0 && (
            <Text as="p" variant="small" styles={{ margin: '10px 0 20px' }}>
              There are no comments here yet
            </Text>
          )}
          {activePost?.comments && (
            <List>
              {activePost.comments.map(comment => (
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
    </View>
  );
};

export default PostPage;
