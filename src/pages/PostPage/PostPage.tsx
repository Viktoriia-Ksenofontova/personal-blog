import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useFela } from 'react-fela';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { useParams, useNavigate } from 'react-router-dom';
import { getStatus, getActivePost } from '../../redux/posts/postsSelectors';
import { removePost, fetchComments } from '../../redux/posts/postsOperations';

import {
  Form,
  CommentItem,
  List,
  Button,
  Text,
  Loader,
  View,
} from '../../components';
import { useThemeContext } from '../../store/hooks';
import { DeleteIcon } from '../../components/Image';
import {
  labelRuleStyle,
  textareaRuleStyle,
  buttonDeleteRuleStyle,
} from './PostPage.style';

const PostPage: React.FC = observer(() => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const correctPostId = Number(postId!.slice(1));
  const { css } = useFela();
  const dispatch = useAppDispatch();
  const status = useAppSelector(getStatus);
  const activePost = useAppSelector(getActivePost);

  const { theme } = useThemeContext();

  type CommentType = {
    id: number;
    body: string;
    postId: number;
  };
  type CurrentPostType = {
    id: number;
    title: string;
    body: string;
    comments?: CommentType[];
  };

  const [currentPost, setCurrentPost] = useState<CurrentPostType | null>(null);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    dispatch(fetchComments(correctPostId));
  }, [correctPostId, dispatch]);

  useEffect(() => {
    setCurrentPost(activePost);
  }, [activePost]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // store.createNewComment(correctPostId, newComment);
    setNewComment('');
  };

  const handleDeleteBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(removePost(correctPostId));
    navigate(`/`);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setNewComment(e.target.value);
  };

  return (
    <View variant="container" padding="20px">
      {status === 'pending' ? (
        <Loader />
      ) : (
        <>
          <View variant="content" justifyContent="space-between">
            <Text as="h2" variant="heading2">
              {currentPost?.title}
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
            {currentPost?.body}
          </Text>

          <Text as="h3" variant="heading3">
            Comments:
          </Text>

          {currentPost?.comments?.length === 0 && (
            <Text as="p" variant="small" styles={{ margin: '10px 0 20px' }}>
              There are no comments here yet
            </Text>
          )}
          {currentPost?.comments && (
            <List>
              {currentPost.comments.map(comment => (
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
});

export default PostPage;
