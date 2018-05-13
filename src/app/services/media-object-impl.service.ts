import { Injectable } from '@angular/core';
import { MediaObjectService } from './media-object.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MediaObjectImplService  extends MediaObjectService{

  constructor(service: HttpClient) {
    super('https://api.github.com/users/mosh-hamedani/followers', service);
   }
  // getMediaObjects(){
  //   return super.getMediaObjects();
  // }
}
