import {User} from '../../models/user.interface';

export class FetchUsers {
  readonly type = '[Users] Load users';
}

export class FetchUsersSuccess {
  readonly type = '[Users] Load users success';

  constructor(public payload: User[]) {
  }
}

export type UsersActions = FetchUsers
  | FetchUsersSuccess;