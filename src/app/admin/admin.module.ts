import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PushDataComponent } from './push-data/push-data.component';
import { TrainingComponent } from './training/training.component';


@NgModule({
  declarations: [PushDataComponent, TrainingComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
