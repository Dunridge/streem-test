import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {User} from '../../interfaces/user.interface';
import {PostsService} from '../../services/posts.service';
import {Post} from '../../interfaces/post.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  // TODO: add linting
  @Input() user: User;

  posts: Post[] = [];
  showPosts = false;

  constructor(
    private postsService: PostsService
  ) {
  }

  ngOnInit(): void {
    this.postsService.getPosts(this.user.id)
      .subscribe(posts => {
        // console.log(posts);
        this.posts = posts;
      });
    console.log(this.posts);
  }

  displayPosts(): void {
    this.showPosts = !this.showPosts;
  }
}
