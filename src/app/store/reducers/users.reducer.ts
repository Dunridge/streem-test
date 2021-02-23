import {User} from '../models/user.interface';
import {UsersActions, UsersActionTypes} from '../actions/users/users.actions';


export interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: []
};

export function usersReducer(state = initialState, action: UsersActions): UsersState {

  switch (action.type) {
    case UsersActionTypes.LOAD_USERS: {
      return {...state};
    }

    case UsersActionTypes.LOAD_USERS_SUCCESS: {
      return {
        users: [...action.payload]
      };
    }

    default: {
      return state;
    }
  }
}
