import {Post} from '../models/post.interface';
import {PostsActions, PostsActionTypes} from '../actions/posts/posts.actions';

export interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: []
};

export function postsReducer(state = initialState, action: PostsActions): PostsState {
  switch (action.type) {
    case PostsActionTypes.LOAD_POSTS: {
      return {...state};
    }

    case PostsActionTypes.LOAD_POSTS_SUCCESS: {
      return {
        posts: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
