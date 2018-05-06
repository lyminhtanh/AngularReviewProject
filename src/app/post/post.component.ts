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
    }, error => alert("unexpected error"))
  }
 createPost(input: HTMLInputElement){
   let post:PostShape = {
      title: input.value
   };
  this.service.createPost(post)
    .subscribe(
      (response: PostShape) => {
        post['id'] = response.id;
        this.posts.splice(0,0,post);
        console.log(JSON.stringify(post));
      },
      (error: AppError) => {
        if(error instanceof BadInputError){
          console.error('log from post component bad input: ' + error);
        } else {
          console.error('other error');
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
   post.id=3000;
   this.service.deletePost(post)
   .subscribe((response) => {
     this.badRequest = false;
     let index = this.posts.indexOf(post);
     this.posts.splice(index, 1);
   }, (error: AppError) => {
     
    console.error('log from post component: '+error);

   })
 }

 
}
