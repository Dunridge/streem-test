import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Post} from '../../store/models/post.interface';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../../services/posts.service';
import {UsersService} from '../../services/users.service';
import {User} from '../../store/models/user.interface';
import {Store} from '@ngrx/store';
import {PostsState} from '../../store/reducers/posts.reducer';
import {Observable} from 'rxjs';
import {PostsActionTypes} from '../../store/actions/posts/posts.actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;
  // posts$: Observable<Post[]> = this.store.select(state => {
  //   console.log(state);
  //   console.log(state.posts);
  //   return state.posts;
  // });
  // posts: Post[];
  user: User;
  userId: string;

  constructor(
    private store: Store<PostsState>,
    private route: ActivatedRoute,
    private postsService: PostsService,
    private usersService: UsersService
  ) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.userId = params.userId;
        // this.postsService.getPosts(params.userId)
        //   .subscribe(posts => {
        //     this.posts = posts;
        //   });
      });

    this.store.dispatch({type: PostsActionTypes.LOAD_POSTS, payload: this.userId});

    this.usersService.getUsers()
      .subscribe(users => {
        this.user = users.find(user => user.id === this.userId);
      });

    //
    this.posts$ = this.store.select(store => {
      console.log(store.posts);
      return store.posts;
    });
  }
}
