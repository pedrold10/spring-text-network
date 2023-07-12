import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  posts: Post[] = []

  /**
   *
   */
  constructor(private postService: PostServiceService,
    private router: Router) {
    
  }
}
