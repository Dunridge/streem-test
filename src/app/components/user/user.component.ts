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
  @Input() user: User;
  @Input() hideButton = false;

  posts: Post[] = [];
  showPosts = false;

  constructor(
    private postsService: PostsService
  ) {
  }

  ngOnInit(): void {
    console.log('before check', this.user.id);
    const userId = this.user == null ? 1 : this.user.id;
    console.log('after check', userId);
    this.postsService.getPosts(userId)
      .subscribe(posts => {
        this.posts = posts;
      });
    console.log(this.posts);
  }
}
