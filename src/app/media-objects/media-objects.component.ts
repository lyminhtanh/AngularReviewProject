import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-media-objects',
  templateUrl: './media-objects.component.html',
  styleUrls: ['./media-objects.component.css']
})
export class MediaObjectsComponent implements OnInit {

  items: MediaObject[] = [];
  constructor(private service: PostService) { 
    service.getPosts().subscribe(
      (response:Object[]) => {
        response.forEach((element) => {
          let item: MediaObject = {
            header: element['login'],
            body: element['html_url'],
            imgSrc: element['avatar_url']
          }
          setTimeout(() => {
            console.log('item:'+item['header']);
            this.items.splice(0, 0, item);
          }, 2000);
          
        })
      }
    )
  }

  ngOnInit() {
  }

}
