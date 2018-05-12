import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { BadInputError } from '../common/bad-input-error';
export interface PostShape{
  id?: number,
  userId?: number,
  title?: string,
  body?: string
}
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent  implements OnInit {
  posts;
  badRequest: boolean = false;
  constructor(private service: PostService) { 
    
  }
  
  ngOnInit(){
   this.service.getPosts()
    .subscribe((response) => {
      this.posts = response;
    });
  }
 createPost(input: HTMLInputElement){
   let post:PostShape = {
      title: input.value
   };
   this.posts.splice(0,0,post);
  this.service.createPost(post)
    .subscribe(
      (response: PostShape) => {
        post['id'] = response.id;
        console.log(JSON.stringify(post));
      },
      (error: AppError) => {
        if(error instanceof BadInputError){
          console.error('log from post component bad input: ' + error);
        } else {
          
          //rethrow to global handler
          throw error;
        }
      }
    );
 }
 update(post: PostShape){
   post.userId = 1000;
   post.body = "body updated";
   this.service.updatePost(post)
    .subscribe((response) => console.log(response));
 }

 deletePost(post: PostShape) {
  // post.id=3000;
  let index = this.posts.indexOf(post);
  this.posts.splice(index, 1);
   this.service.deletePost(post)
   .subscribe((response) => {
     this.badRequest = false;
   },
   (error) => {
     //roll back when delete failed
     this.posts.splice(index, 0, post);
   }
  )
 }

 
}
