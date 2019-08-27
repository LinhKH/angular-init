import { Component, OnInit } from '@angular/core';

import { MessageConstants } from '../../core/common/message.constants';
import { SystemConstants } from '../../core/common/system.constants';
import { Router } from '@angular/router';


@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	public pageIndex: number = 1;
	public pageSize: number = 10;
	public pageDisplay: number = 10;
	public filter: string = '';
	public users: any[];
	public totalRow: number;
	public key: string;
	public value: number = 1;
	public baseFolder : string = SystemConstants.BASE_API;

	constructor(

		public _router : Router,

	) { 
		
	}

	ngOnInit() {
		
	}

	loadData() {
		
	}

	pageChanged($event) {
		this.pageIndex = $event.page;
		this.loadData();
	}

	setPageSize(pageSize) {
		this.pageSize = pageSize;
		this.loadData();
	}

	deleteUser(id: any) {
		
	}

	deleteUserConfirm(id: any) {
	
	}

	sort(key: string) {
		this.key = key;
		this.value = -(this.value);
	}

	editUser(id: any) {
		this._router.navigate(['main/user/form',id]);
	}

}
