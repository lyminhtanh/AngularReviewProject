import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../services/post.service';


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

  constructor(private service: PostService) { 
    
  }
  
  ngOnInit(){
   this.service.getPosts()
    .subscribe((response) => {
      this.posts = response;
    })
  }
 createPost(input: HTMLInputElement){
   let post:PostShape = {
      title: input.value
   };
  this.service.createPost(post)
    .subscribe((response: PostShape) => {
      post['id'] = response.id;
      this.posts.splice(0,0,post);
      console.log(JSON.stringify(post));
    });
 }
 update(post: PostShape){
   post.userId = 1000;
   post.body = "body updated";
   this.service.updatePost(post)
    .subscribe((response) => console.log(response));
 }

 deletePost(post: PostShape) {
   this.service.deletePost(post)
   .subscribe((response) => {
     let index = this.posts.indexOf(post);
     this.posts.splice(index, 1);
   })
 }

 
}
