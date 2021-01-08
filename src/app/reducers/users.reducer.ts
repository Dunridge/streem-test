import {Action, createReducer, on, State} from '@ngrx/store';
import {User} from '../interfaces/user.interface';
import {UsersActions} from '../users/users.actions';

// test

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: []
};

// export const usersReducer = createReducer(
//   initialState,
//   on(UsersActions.fetchUsers, state => ({...state, users: state.users}))
// );

export function usersReducer(state = initialState, action: UsersActions): UsersState {
  console.log(action.type);
  console.log(action);

  // console.log(action.payload); // you have the users here

  console.log(state);

  switch (action.type) {
    case '[Users] Load users': {
      return {...state};
    }

    case '[Users] Load users success': {
      return {
        users: [...action.payload]
      };
    }

    default: {
      return state;
    }
  }
}
