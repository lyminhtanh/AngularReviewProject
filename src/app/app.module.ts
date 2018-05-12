import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from'@angular/common/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './handler/app.error.handler';
import { MediaObjectComponent } from './media-object/media-object.component';
import { MediaObjectsComponent } from './media-objects/media-objects.component';
import { MediaObjectServiceImpl } from './services/media-object.service';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    MediaObjectComponent,
    MediaObjectsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    //,
    //{provide: ErrorHandler, useClass: AppErrorHandler}
    //{provide: MediaObjectService, useClass: MediaObjectServiceImpl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
