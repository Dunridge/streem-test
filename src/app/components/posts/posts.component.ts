import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Post} from '../../interfaces/post.interface';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../../services/posts.service';
import {UsersService} from '../../services/users.service';
import {User} from '../../interfaces/user.interface';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent implements OnInit {
  posts: Post[];
  user: User;
  userId: string;

  constructor(
    private store: Store<{ users: User[] }>,
    private route: ActivatedRoute,
    private postsService: PostsService,
    private usersService: UsersService
  ) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.userId = params.userId;
        this.postsService.getPosts(params.userId)
          .subscribe(posts => {
            this.posts = posts;
          });
      });

    this.usersService.getUsers()
      .subscribe(users => {
        this.user = users.find(user => user.id === this.userId);
      });
  }
}
