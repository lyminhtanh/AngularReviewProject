import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'


@Injectable()
export class MediaObjectService {

  constructor(private url:string, private service: HttpClient) { }
  getMediaObjects(){
   return this.service.get(this.url);
  }
}
