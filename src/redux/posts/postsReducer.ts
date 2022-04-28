import { combineReducers } from 'redux';

import actions from './postsActions';
import { PostType, ActivePostType, ErrorType, StatusType } from '../types';
import { ReducerBuilder } from './reducerBuilder';

const initialPostsState = [] as PostType[];

const posts = ReducerBuilder.new(initialPostsState)
  .addCase(actions.fetchPostsSuccess, (_, payload) => payload)
  .addCase(actions.createPostSuccess, (state, payload) => [...state, payload])
  .addCase(actions.removePostSuccess, (state, payload) =>
    state.filter(post => post.id !== payload),
  )
  .build();

const initialErrorState = null;

const error = ReducerBuilder.new<ErrorType>(initialErrorState)
  .addCase(actions.fetchPostsRequest, () => null)
  .addCase(actions.fetchPostsSuccess, () => null)
  .addCase(actions.fetchPostsError, (_, payload) => payload.error.message)
  .addCase(actions.fetchCommentsRequest, () => null)
  .addCase(actions.fetchCommentsSuccess, () => null)
  .addCase(actions.fetchCommentsError, (_, payload) => payload.error.message)
  .addCase(actions.createPostRequest, () => null)
  .addCase(actions.createPostSuccess, () => null)
  .addCase(actions.createPostError, (_, payload) => payload.error.message)
  .addCase(actions.removePostRequest, () => null)
  .addCase(actions.removePostSuccess, () => null)
  .addCase(actions.removePostError, (_, payload) => payload.error.message)
  .addCase(actions.createNewCommentRequest, () => null)
  .addCase(actions.createNewCommentSuccess, () => null)
  .addCase(actions.createNewCommentError, (_, payload) => payload.error.message)
  .build();

const initialStatusState = 'pending';

const status = ReducerBuilder.new<StatusType>(initialStatusState)
  .addCase(actions.fetchPostsRequest, () => 'pending')
  .addCase(actions.fetchPostsSuccess, () => 'success')
  .addCase(actions.fetchPostsError, () => 'error')
  .addCase(actions.fetchCommentsRequest, () => 'pending')
  .addCase(actions.fetchCommentsSuccess, () => 'success')
  .addCase(actions.fetchCommentsError, () => 'error')
  .addCase(actions.createPostRequest, () => 'pending')
  .addCase(actions.createPostSuccess, () => 'success')
  .addCase(actions.createPostError, () => 'error')
  .addCase(actions.removePostRequest, () => 'pending')
  .addCase(actions.removePostSuccess, () => 'success')
  .addCase(actions.removePostError, () => 'error')
  .addCase(actions.createNewCommentRequest, () => 'pending')
  .addCase(actions.createNewCommentSuccess, () => 'created')
  .addCase(actions.createNewCommentError, () => 'error')
  .build();

const initialActivePostState = null;

const activePost = ReducerBuilder.new<ActivePostType>(initialActivePostState)
  .addCase(actions.fetchCommentsSuccess, (_, payload) => payload)
  .addCase(actions.createNewCommentSuccess, (state, payload) => {
    let newActivePost: ActivePostType | null = null;
    if (state?.comments) {
      newActivePost = { ...state, comments: [...state.comments, payload] };
    } else if (state) {
      newActivePost = { ...state, comments: [payload] };
    }
    return newActivePost;
  })
  .addCase(actions.createPostSuccess, (_, payload) => payload)
  .addCase(actions.removePostSuccess, () => null)
  .build();

export default combineReducers({
  posts,
  activePost,
  error,
  status,
});
