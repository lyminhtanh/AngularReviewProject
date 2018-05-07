import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import { Observable } from 'rxjs/observable' !! wrong import causes Observable.throw is not a function
import { Observable } from 'rxjs/Observable'

import { AppError } from '../common/app-error';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import { BadInputError } from '../common/bad-input-error';

@Injectable()
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }
  
  getPosts(){
    return  this.http.get(this.url)
    .catch(this.handleError);
  }

  createPost(post){
    return this.http.post(this.url, this.toJsonString(post))
      .catch(this.handleError);
  }

  updatePost(post){
    return this.http.put(this.url + '/'+post.id, post )
      .catch(this.handleError);
  }

  deletePost(post){
    return this.http.delete(this.url+ '/'+post.id, post.id)
      .catch(this.handleError);
  }
  private toJsonString(post): string {
    console.log(JSON.stringify(post));
    return JSON.stringify(post);
  }
  
  private handleError(error: HttpErrorResponse){
      if(error.status === 400){
        return Observable.throw(new BadInputError(error));
      }
      return Observable.throw(new AppError(error));

  }
}
