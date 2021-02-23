import {Component, OnInit} from '@angular/core';
import {User} from '../../store/models/user.interface';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/models/app-state.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]> = this.store.select(state => {
    // @ts-ignore
    return state.users.users;
  });

  // TODO: correcting these parts according to your NgRx tutorial app materials (...) --
  //  -- did for users, now implementing for posts...
  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch({type: '[Users] Load users'});
  }
}
