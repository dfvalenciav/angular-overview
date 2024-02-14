import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent implements OnInit {
    title : string = '';
    body : string = '';

    @Output() addPost : EventEmitter<any> = new EventEmitter();

    constructor(){

    }
    ngOnInit(): void {
      
    }

    submitForm() : void {
      const post = {
        title: this.title,
        body: this.body,
        votes: 1
      }
      this.addPost.emit(post);
      this.title = '';
      this.body = '';
    }

}
