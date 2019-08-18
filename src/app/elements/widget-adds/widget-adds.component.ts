import { Component, OnInit, Input } from '@angular/core';
import { AdsService } from 'src/app/shared/services/ads.service';
import { Ads } from 'src/app/shared/defines/ads';

@Component({
  selector: 'app-widget-adds',
  templateUrl: './widget-adds.component.html',
  styleUrls: ['./widget-adds.component.css']
})
export class WidgetAddsComponent implements OnInit {

  @Input("zvn-widget-ads") position: string;

  item: Ads = null;

  constructor(
    private _adsService: AdsService
  ) { }

  ngOnInit() {
    this._adsService.getItemByPosition(this.position).subscribe(
      (items: Ads[]) => {
        this.item = items[0];
      }
    );
  }

}
