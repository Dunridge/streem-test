import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {AppComponent} from './app.component';
import {PostComponent} from './components/post/post.component';

// TODO: try adding the users route as a child route to the default route
const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'users',
  //   pathMatch: 'full'
  // },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/:userId',
    component: PostComponent
  },
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
