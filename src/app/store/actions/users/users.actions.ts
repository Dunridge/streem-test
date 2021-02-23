import {User} from '../../models/user.interface';

export enum UsersActionTypes {
  LOAD_USERS = '[Users] Load users',
  LOAD_USERS_SUCCESS = '[Users] Load users success',
  LOAD_USERS_FAILURE = '[Users] Users load error'
}

export class FetchUsers {
  readonly type = UsersActionTypes.LOAD_USERS;
}

export class FetchUsersSuccess {
  readonly type = UsersActionTypes.LOAD_USERS_SUCCESS;

  constructor(public payload: User[]) {
  }
}

export class FetchUsersFailure {
  readonly type = UsersActionTypes.LOAD_USERS_FAILURE;

  constructor(public payload: Error) {
  }

}

export type UsersActions = FetchUsers
  | FetchUsersSuccess
  | FetchUsersFailure;
