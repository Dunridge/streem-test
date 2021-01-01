import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Post} from '../../interfaces/post.interface';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../../services/posts.service';
import {UsersService} from '../../services/users.service';
import {User} from '../../interfaces/user.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {
  // TODO: make an array
  // TODO: remove some data from the main page

  // TODO: remove this post field
  post: Post;
  posts: Post[];
  user: User;
  userId: string;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private usersService: UsersService
  ) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        console.log(params.userId);
        this.userId = params.userId;
        this.postsService.getPosts(params.userId)
          // .subscribe(posts => this.post = posts[0]);
          .subscribe(posts => {
            this.post = posts[0];
            this.posts = posts;
          });
      });

    console.log(this.userId);

    this.usersService.getUsers()
      .subscribe(users => {
        console.log(users);
        this.user = users.find(user => user.id === this.userId);
        console.log(this.user);
      });
    console.log(this.user);
  }
}
