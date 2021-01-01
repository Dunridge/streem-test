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
export class UserComponent implements OnInit, User {
  // TODO: add linting

  @Input() age: number;
  @Input() name: string;

  posts: Post[] = [];
  showPosts = false;

  constructor(
    private postsService: PostsService
  ) {
  }

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    console.log(this.posts);
  }

  displayPosts(): void {
    // TODO: route to posts for the user (see those individual routing in your Coursera project)
    this.showPosts = !this.showPosts;
  }
}
