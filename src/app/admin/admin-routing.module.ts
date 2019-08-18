import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingComponent } from './training/training.component';
import { PushDataComponent } from './push-data/push-data.component';


const routes: Routes = [
  { path: 'training',  component: TrainingComponent},
	{ path: 'push-data',  component: PushDataComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
