import {UsersState} from '../reducers/users.reducer';

export interface AppState {
 readonly users: UsersState;
}
