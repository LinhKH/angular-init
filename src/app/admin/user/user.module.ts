import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// Third Party

// import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
// Shared
import { CoreModule } from './../../core/core.module';
// Pipe
import { FilterPipe } from './pipes/filter.pipe';

const userRoutes: Routes = [
	{ path: '', redirectTo: 'index', pathMatch: 'full' },
	{ path: 'index', component: UserComponent },
	{ path: 'form', component: UserFormComponent },
	{ path: 'form/:id', component: UserFormComponent },
];

@NgModule({
	imports: [
		CommonModule,
		
		FormsModule,
		CoreModule,
		// MultiselectDropdownModule,

		RouterModule.forChild(userRoutes)
	],
	providers: [
		
	],
	declarations: [
		UserComponent,
		UserFormComponent,
		FilterPipe
	]
})
export class UserModule { }
