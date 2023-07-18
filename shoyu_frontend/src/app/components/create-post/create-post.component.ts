import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { PostServiceService } from 'src/app/services/post-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit{

  users: User[] = []

  baseApiUrl: string = environment.baseApiUrl;
  createPostRequest: Post = {
    postId: 0,
    user: {
      userName: "",
      name: "",
      id: 0,
      followers: 0
    },
    content: ""

  }

  constructor(private postService: PostServiceService,
    private userService: UserServiceService,
    private router: Router,
    private http: HttpClient) { }


    ngOnInit(): void{
      this.listUsers();
    }

  createPost(){
    

    this.postService.createPost(this.createPostRequest).subscribe(
      (data) => {
        console.log(`Post criado: ${data}`)
      },
      (error) => console.log(error)

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
