import {Injectable} from '@angular/core';
import {Post} from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[] = [
    {
      title: 'First post',
      description: 'This is my first post'
    },
    {
      title: 'Second post',
      description: 'This is my second post'
    },
    {
      title: 'Third post',
      description: 'This is my third post'
    }
  ];

  getPosts(): Post[] {
    return this.posts;
  }
}
