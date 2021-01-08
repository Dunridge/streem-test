import {User} from '../interfaces/user.interface';
import {UsersActions} from '../users/users.actions';

export interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: []
};

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
      console.log('case triggered');
      console.log(action);
      return {
        users: [...action.payload]
      };
    }

    default: {
      return state;
    }
  }
}
