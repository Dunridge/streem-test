import {Actions, createEffect, ofType} from '@ngrx/effects';
import {PostsService} from '../../services/posts.service';
import {FetchPosts, FetchPostsFailure, FetchPostsSuccess, PostsActionTypes} from '../actions/posts/posts.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType<FetchPosts>(PostsActionTypes.LOAD_POSTS),
    mergeMap(
      // TODO: you have to pass user id to the effect
      (action) => this.postsService.getPosts(action.payload)
        .pipe(
          map(data => new FetchPostsSuccess(data)),
          catchError(error => of(new FetchPostsFailure(error)))
        )
    )
  ));

  constructor(
    private actions$: Actions,
    private postsService: PostsService
  ) {
  }
}
