import {Component, OnInit} from '@angular/core';
import {User} from '../../interfaces/user.interface';
import {UsersService} from '../../services/users.service';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {UsersState} from '../../reducers/users.reducer';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<UsersState> = this.store.select(state => {
    console.log(state.users);
    // console.log(state.users.users);
    // @ts-ignore
    return state.users.users;
  });

  constructor(
    private store: Store<{ users: User[] }>
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch({type: '[Users] Load users'});
    console.log(this.users$);
  }
}
