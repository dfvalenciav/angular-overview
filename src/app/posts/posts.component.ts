import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { NgFor } from '@angular/common';
import { PostItemComponent } from '../post-item/post-item.component';
import { PostsService } from '../services/posts.service';
import { CreatePostComponent } from '../create-post/create-post.component';


@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [NgFor, PostItemComponent, CreatePostComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  title: string = 'Posts';
  posts: Post[] = [];

  constructor(private postService : PostsService) { }

  ngOnInit(): void {
    this.postService.getPost().subscribe(res  =>{
      for (let index = 0; index < res.length; index++){
        const post = res[index];
        post["votes"] = 1;
      }
      this.posts = res;
    });
  }

  hidePost (post:Post) : void {
    this.posts = this.posts.filter (p => p.id !== post.id);
  }

  addPost(post: Post) : void{
    this.posts.unshift(post);
    alert ("Post added");
  }

}