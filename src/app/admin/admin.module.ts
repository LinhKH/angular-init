import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';


// Component
import { TrainingComponent } from "./components/training.component";
import { PushDataComponent } from "./components/push-data.component";

// Routing
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserModule } from './user/user.module';

@NgModule({
	imports: [
    CommonModule,
    UserModule,

		// Routing
		AdminRoutingModule,
	],
	declarations: [
      TrainingComponent,
      PushDataComponent,
      AdminComponent
  	],
  	exports: [
  		
  	]
})
export class AdminModule { }
