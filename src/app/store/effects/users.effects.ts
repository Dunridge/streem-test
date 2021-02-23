import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UsersService} from '../../services/users.service';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {UsersActionTypes} from '../actions/users/users.actions';


@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActionTypes.LOAD_USERS),
    mergeMap(() => this.usersService.getUsers()
      .pipe(
        map(users => ({ type: UsersActionTypes.LOAD_USERS_SUCCESS, payload: users })),
        catchError(() => of({ type: UsersActionTypes.LOAD_USERS_FAILURE }))
      ))
  ));

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {
  }
}
