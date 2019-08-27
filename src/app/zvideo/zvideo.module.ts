import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

// Module
import { ElementsModule }  from './../elements/elements.module';

// Component


// Routing
import { ZVideoRoutingModule } from './zvideo-routing.module';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { VideoComponent } from './video/video.component';
import { VideosComponent } from './videos/videos.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
	imports: [
		CommonModule,

		// Custom Module
		ElementsModule,

		// Routing
		ZVideoRoutingModule,
	],
	declarations: [
		HomeComponent,
		PlaylistComponent,
		PlaylistsComponent,
		VideoComponent,
		VideosComponent,
		ErrorComponent
  	],
  	exports: [
  		
  	]
})
export class ZVideoModule { }
