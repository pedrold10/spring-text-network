import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, map } from 'rxjs';
import { Post } from '../models/Post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  createPost(createPostRequest: Post): Observable<Post[]>{
    return this.http.post<Post>(`${this.baseApiUrl}`, createPostRequest)
    .pipe(
      map((response: any) => response.data)
    )
  }
}
