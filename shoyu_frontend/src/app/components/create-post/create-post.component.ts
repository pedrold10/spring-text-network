import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  users: User[] = [
    {
      id: 1,
      userName: "gold10",
      name: "Gabriel",
      followers: 99
    },
    {
      id: 2,
      userName: "pedroldZ",
      name: "Pedro",
      followers: 99
    }
  ]

  createPostRequest: Post = {
    postId: 0,
    user: {
      id: 0,
      name: "",
      userName: "",
      followers: 0
    },
    content: ""
  }

  constructor(private postService: PostServiceService,
    private router: Router) { }

  createPost(){
    const selectedUser = this.users.find(user => user.id === this.createPostRequest.user.id);
  
    if (selectedUser) {
      this.createPostRequest.user.id = selectedUser.id;
      this.createPostRequest.user.name = selectedUser.name;
      this.createPostRequest.user.userName = selectedUser.userName;
      this.createPostRequest.user.followers = selectedUser.followers;
    }

    this.postService.createPost(this.createPostRequest)
    .subscribe(
      (post) => {
        this.router.navigate(["feed"])
      }
    )
  }

}
