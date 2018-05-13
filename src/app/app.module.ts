import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from'@angular/common/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './handler/app.error.handler';
import { MediaObjectComponent } from './media-object/media-object.component';
import { MediaObjectsComponent } from './media-objects/media-objects.component';
import { MediaObjectImplService } from './services/media-object-impl.service';
import { HomeComponent } from './home/home.component';
import { ArchiveComponent } from './archive/archive.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    MediaObjectComponent,
    MediaObjectsComponent,
    HomeComponent,
    ArchiveComponent,
    NotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'',
        component: HomeComponent
      },
      { path: 'archive/:year/:month',
        component: ArchiveComponent
      },
      { path: '**',
        component: NotFoundComponent
      },
    ])
    
  ],
  providers: [
    PostService,
    MediaObjectImplService
    //,
    //{provide: ErrorHandler, useClass: AppErrorHandler}
    //{provide: MediaObjectService, useClass: MediaObjectServiceImpl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
