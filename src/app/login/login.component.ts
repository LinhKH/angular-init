
import { Component, OnInit } from '@angular/core';
import { MessageConstants } from './../core/common/message.constants';
import { UrlConstants } from './../core/common/url.constants';

import { SystemConstants } from './../core/common/system.constants';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loading: boolean = false;
	model: any = {}
	returnUrl: string;

	constructor(
		
	) { 
    
  }

	ngOnInit() {    
	}

	login() {
		
	}

}
