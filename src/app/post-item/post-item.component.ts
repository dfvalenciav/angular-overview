import { Component, Input, Output, EventEmitter } from '@angular/core';
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

  @Output()
  hidePost :EventEmitter<Post>= new EventEmitter; 

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

  hide(post:Post) : void {
    this.hidePost.emit(post);
  }
}
