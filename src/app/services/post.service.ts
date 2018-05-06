import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/observable' !! wrong import causes Observable.throw is not a function
import { Observable } from 'rxjs/Observable'

import { AppError } from '../common/app-error';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }
  
  getPosts(){
    return  this.http.get(this.url);
  }

  createPost(post){
    return this.http.post(this.url, this.toJsonString(post));
  }

  updatePost(post){
    return this.http.put(this.url + '/'+post.id, post );
  }

  deletePost(post){
    return this.http.delete(this.url+ '/'+post.id, post.id)
      .catch((error) => {
        return Observable.throw(new AppError(error));
      });
  }
  private toJsonString(post): string {
    console.log(JSON.stringify(post));
    return JSON.stringify(post);
  }
}
