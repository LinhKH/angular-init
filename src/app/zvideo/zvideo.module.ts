import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZvideoRoutingModule } from './zvideo-routing.module';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { VideoComponent } from './video/video.component';
import { VideosComponent } from './videos/videos.component';


@NgModule({
  declarations: [ErrorComponent, HomeComponent, PlaylistComponent, PlaylistsComponent, VideoComponent, VideosComponent],
  imports: [
    CommonModule,
    ZvideoRoutingModule
  ]
})
export class ZvideoModule { }
