import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { VideoComponent } from './video/video.component';
import { ErrorComponent } from './error/error.component';
import { ZvideoComponent } from './zvideo.component';


// Component

const defineRoutes: Routes = [

  {
    path: '', component: ZvideoComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index',  component: HomeComponent },	
      { path: 'videos',  component: VideosComponent },
      { path: 'playlists',  component: PlaylistsComponent },
      { 
        path: 'playlist',
        children: [
          {
            path: '',
            component: PlaylistsComponent
          },
          {
            path: ':id',
            component: PlaylistComponent
          }
        ]
      },
      { 
        path: 'video',
        children: [
          {
            path: '',
            component: VideosComponent
          },
          {
            path: ':id',
            component: VideoComponent
          }
        ]
      }
    ]
  }

];

@NgModule({
	imports: [
		RouterModule.forChild(defineRoutes)
	],
	exports: [
		RouterModule
	]
})
export class ZVideoRoutingModule {}
