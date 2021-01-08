import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { HeaderComponent } from './components/header/header.component';
import {UsersService} from './services/users.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import {StoreModule} from '@ngrx/store';
import {simpleReducer} from './reducers/simple.reducer';
import {EffectsModule} from '@ngrx/effects';
import {UsersEffects} from './effects/users.effects';
import {usersReducer} from './reducers/users.reducer';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    HeaderComponent,
    FooterComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forRoot({ message: simpleReducer, users: usersReducer }),
    EffectsModule.forRoot([UsersEffects])
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
