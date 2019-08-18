import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/shared/defines/video';
import { VideoService } from 'src/app/shared/services/video.service';

@Component({
  selector: 'app-widget-popular-video',
  templateUrl: './widget-popular-video.component.html',
  styleUrls: ['./widget-popular-video.component.css']
})
export class WidgetPopularVideoComponent implements OnInit {

  items: Video[] = [];

  constructor(
    private _videoService: VideoService
  ) { }

  ngOnInit() {
    this._videoService.getItemsPopular().subscribe(
      (items: Video[]) => {
        this.items = items;
      }
    );
  }

}
