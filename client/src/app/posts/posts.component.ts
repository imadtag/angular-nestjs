import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, ReactiveFormsModule} from "@angular/forms";
import {PostsService} from "./posts.service";
//import { CreatePostDto } from "./create-post.dto";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  //postDto: CreatePostDto;
  constructor(private postsService: PostsService) { }
  
  addPostForm = new FormGroup({
    t: new FormControl('',
      [Validators.required, Validators.minLength(6)]),
    /*b: new FormControl('',
      [Validators.required, Validators.body]),
    u: new FormControl('',
      [Validators.required, Validators.userId]),
      */
  })

  ngOnInit() {
    this.getPosts();
  }

  onSubmit() {
    console.log(this);
  }

  private getPosts() {
    this.postsService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
