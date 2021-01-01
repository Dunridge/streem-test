import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getPosts(userId: number): Observable<any> {
    return this.httpClient.get(`https://5fca3e863c1c220016441fcc.mockapi.io/api/v1/users/${userId}/posts`);
  }
}
