import {Post} from '../../models/post.interface';
import {Action} from '@ngrx/store';
import {User} from '../../models/user.interface';

// TODO: add the same action types to the users
export enum PostsActionTypes {
  LOAD_POSTS = '[Posts] Load posts',
  LOAD_POSTS_SUCCESS = '[Posts] Load posts success',
  LOAD_POSTS_FAILURE = '[Posts] Load posts failure'
}

export class FetchPosts implements Action {
  // TODO: pass the payload of the user's id when you dispatch this action + add the payload here
  readonly type = PostsActionTypes.LOAD_POSTS;

  constructor(public payload: number) {
  }
}

export class FetchPostsSuccess implements Action {
  readonly type = PostsActionTypes.LOAD_POSTS_SUCCESS;

  constructor(public payload: Post[]) {
  }
}

export class FetchPostsFailure implements Action {
  readonly type = PostsActionTypes.LOAD_POSTS_FAILURE;

  constructor(public payload: Error) {
  }
}

export type PostsActions = FetchPosts
  | FetchPostsSuccess;
