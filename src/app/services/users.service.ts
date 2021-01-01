import {Injectable} from '@angular/core';
import {User} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // TODO: replace this mock data with a call to the API
  // mock data
  users: User[] = [
    {
      name: 'Max',
      age: 20
    },
    {
      name: 'Vlad',
      age: 20
    },
    {
      name: 'Kolya',
      age: 20
    },
    {
      name: 'Dima',
      age: 20
    }
  ];

  constructor() {
  }

  getUsers(): User[] {

    return this.users;
  }
}
