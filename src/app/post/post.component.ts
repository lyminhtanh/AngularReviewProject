import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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

export class PostComponent {
  posts;
  private newLocal = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { 
    http.get(this.newLocal)
        .subscribe((response) =>{
          this.posts = response;
         // console.log(response);
        } )
  }
  

 createPost(input: HTMLInputElement){
   let post:PostShape = {
      title: input.value
   };
   let post1 = {title: input.value};
  this.http.post(this.newLocal, this.newMethod(post))
  .subscribe((response: PostShape) => {
  //  post['id'] = 
   // post
    post['id'] = response.id;
    this.posts.splice(0,0,post);
    console.log(JSON.stringify(post));
  })
 }
 update(post: PostShape){
   post.userId = 1000;
   post.body = "body updated";
  //  this.http.put(this.newLocal+'/'+post.id, post)
  //  .subscribe((response: PostShape) => {
  //    console.log(response);
  //  })
  this.http.patch(this.newLocal+'/'+post.id, {id: 2000})
  .subscribe((response: PostShape) => {
    console.log(response);
  })
 }

 deletePost(post: PostShape) {
   this.http.delete(this.newLocal+'/'+post.id)
   .subscribe((response) => {
     let index = this.posts.indexOf(post);
     this.posts.splice(index, 1);
   })
 }

  private newMethod(post: PostShape): any {
    console.log(JSON.stringify(post));
    return JSON.stringify(post);
  }
}
