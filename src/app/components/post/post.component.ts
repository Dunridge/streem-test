import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Post} from '../../interfaces/post.interface';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {
  @Input() post: Post;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {
    this.route.params
      .subscribe(params => {
        this.postsService.getPosts(params.userId)
          .subscribe(posts => this.post = posts[0]);
      });
  }
}
