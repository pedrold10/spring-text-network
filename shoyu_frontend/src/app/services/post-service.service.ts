import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, map } from 'rxjs';
import { Post } from '../models/Post';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  createPost(createPostRequest: Post): Observable<Post>{
    return this.http.post<Post>(`${this.baseApiUrl}/posts`, createPostRequest)
    .pipe(
      map((response: any) => response.data)
    )
  }
  listPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.baseApiUrl}/posts`)
  }
}
