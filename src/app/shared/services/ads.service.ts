import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ads } from '../defines/ads';
import { AppSetting } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(
		private _db: AngularFireDatabase
	) {}

	getItemByPosition(position: string) : Observable<Ads[]> {
		return this._db.list(AppSetting.TBL_ADS, {
			query: {
				orderByChild: 'position',
				equalTo: position
			}
		}).map(Ads.fromJsonList);
	}

}
