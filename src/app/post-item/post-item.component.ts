import { Component, Input } from '@angular/core';
import { Post } from '../models/Post';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css'
})
export class PostItemComponent {

  @Input()
  post: Post = new Post; 

  constructor() {
    this.post.id = 0,
    this.post.body = '',
    this.post.title= '',
    this.post.votes = 1
  }

  upvote(post: Post) : void{
    post.votes +=1;
  }

  downvote(post: Post) : void{
    post.votes -=1;
  }
}
