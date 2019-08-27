import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { VideoComponent } from './video/video.component';
import { ErrorComponent } from './error/error.component';


// Component


const defineRoutes: Routes = [

	// Home Page /
	{ path: '',  component: HomeComponent },

	// List Videos /videos?page=1
	{ path: 'videos',  component: VideosComponent },	

	// List Playlists /playlists?page=1
	{ path: 'playlists',  component: PlaylistsComponent },

	// List videos in Playlist
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

	// Info video /video/:id
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
	},

	{ path: '**',  component: ErrorComponent },
	
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
