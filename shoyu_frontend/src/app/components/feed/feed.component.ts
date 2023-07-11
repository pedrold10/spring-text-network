import { Component } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  posts: Post[] = [
    {
      postId: 1,
      user: {
        id: 1,
        userName: "pedrold10",
        name: "Pedro Gabriel",
        followers: 99
      },
      content: "Ei olá, prazer em te conhecer!"
    },
    {
      postId: 2,
      user: {
        id: 1,
        userName: "pedrold10",
        name: "Pedro Gabriel",
        followers: 99
      },
      content: "Ei olá, prazer em te conhecer!"
    },
    {
      postId: 3,
      user: {
        id: 1,
        userName: "pedrold10",
        name: "Pedro Gabriel",
        followers: 99
      },
      content: "Ei olá, prazer em te conhecer!"
    },
    {
      postId: 4,
      user: {
        id: 1,
        userName: "pedrold10",
        name: "Pedro Gabriel",
        followers: 99
      },
      content: "Ei olá, prazer em te conhecer!"
    },
  ]
}
