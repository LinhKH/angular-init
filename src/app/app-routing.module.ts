import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './zvideo/home/home.component';
import { ErrorComponent } from './zvideo/error/error.component';


const defineRoutes: Routes = [
  // { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '', loadChildren: './zvideo/zvideo.module#ZVideoModule', pathMatch: 'full' },
  // { path: 'home', loadChildren: './zvideo/zvideo.module#ZVideoModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: '**',  component: ErrorComponent },
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
