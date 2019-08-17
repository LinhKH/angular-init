import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from '../defines/playlist';
import { AppSetting } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private _db: AngularFireDatabase) { }
  getItems(): Observable<Playlist[]> {
		return this._db.list(AppSetting.TBL_PLAYLIST, {
				query: {
					limitToFirst: 4
				}
			}).map(Playlist.fromJsonList);
	}

	getItemByID(playlistID: string): Observable<Playlist> {
		return this._db.list(AppSetting.TBL_PLAYLIST, {
			query: {
				orderByChild: 'id',
				equalTo: playlistID
			}
		}).map(results => Playlist.fromJson(results[0]));
	}
}
