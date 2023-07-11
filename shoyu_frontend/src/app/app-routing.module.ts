import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { CreatePostComponent } from './components/create-post/create-post.component';

const routes: Routes = [
  {
    component: FeedComponent,
    path: "feed"
  },
  {
    component: CreatePostComponent,
    path: "new"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
