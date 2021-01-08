import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UsersService} from '../services/users.service';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';


@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType('[Users] Load users'),
    mergeMap(() => this.usersService.getUsers()
      .pipe(
        map(users => ({ type: '[Users] Load users success', payload: users })),
        catchError(() => of({type: '[Users] Users load error'}))
      ))
  ));

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {
  }
}
