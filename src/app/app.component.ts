import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

interface AppState { // TODO: move this to the interfaces folder
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'streams-test';
  message$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select('message');
  }

  spanishMessage(): void {
    this.store.dispatch({type: 'SPANISH'});
  }

  frenchMessage(): void {
    this.store.dispatch({type: 'FRENCH'});
  }
}
