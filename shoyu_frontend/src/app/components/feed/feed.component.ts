import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { PostServiceService } from 'src/app/services/post-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  posts: Post[] = []
  users: User[] = []

  constructor(private postService: PostServiceService,
    private userService: UserServiceService,
    private router: Router) {
    
  }

  ngOnInit(): void{
    this.listPosts();
  }
  listPosts(): void{
    this.postService.listPosts().subscribe( 
      (posts) => {
        this.posts = posts
      },
      (error) => {
        console.log(error)
      }
    )
  }
  listUsers(): void{
    this.userService.listUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
