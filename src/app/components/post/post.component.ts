import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../interfaces/post.interface';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {
  }

  ngOnInit(): void {
    // console.log(this.post);
    // TODO: do this in the constructor
    this.route.params
      .subscribe(params => {
        console.log(params.userId); // TODO: get the id from the params
        this.postsService.getPosts(params.userId)
          .subscribe(posts => this.post = posts[0]); // TODO: fix this -- this fetching in not optimal
      });
  }
}
