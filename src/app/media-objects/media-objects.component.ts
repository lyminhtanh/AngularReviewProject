import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { MediaObjectImplService } from '../services/media-object-impl.service';

@Component({
  selector: 'app-media-objects',
  templateUrl: './media-objects.component.html',
  styleUrls: ['./media-objects.component.css']
})
export class MediaObjectsComponent implements OnInit {

  items: any[] = [];
  constructor(private service: MediaObjectImplService) { 
    service.getMediaObjects().subscribe(
      (response:any[]) => {
        this.items = response;
      }
    )
  }

  ngOnInit() {
  }

}
