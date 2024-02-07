import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { NgFor } from '@angular/common';
import { PostItemComponent } from '../post-item/post-item.component';
import { PostsService } from '../services/posts.service';


@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [NgFor, PostItemComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  title: string = 'Posts';
  posts: Post[] = [];

  constructor(private postService : PostsService) { }

  ngOnInit(): void {
    this.posts = this.postService.getPost();
  }

  hidePost (post:Post) : void {
    this.posts = this.posts.filter (p => p.id !== post.id);
  }

}