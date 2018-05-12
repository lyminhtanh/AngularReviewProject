import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-object',
  templateUrl: './media-object.component.html',
  styleUrls: ['./media-object.component.css']
})
export class MediaObjectComponent implements OnInit {

  @Input('media-object') mediaObject:MediaObject;
  
  constructor() { }

  ngOnInit() {
  }

}
