import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const defineRoutes: Routes = [
  // { path: '', redirectTo: '/study', pathMatch: 'full' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthGuard] }
];

@NgModule({
	imports: [
		RouterModule.forRoot(defineRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
