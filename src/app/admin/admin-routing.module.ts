import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Component
import { TrainingComponent } from "./components/training.component";
import { PushDataComponent } from "./components/push-data.component";
import { AdminComponent } from './admin.component';


const defineRoutes: Routes = [

  {
    path: '', component: AdminComponent,
    children: [
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      // localhost:4200/admin/home
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      // localhost:4200/admin/user
      { path: 'user', loadChildren: './user/user.module#UserModule' },
      // localhost:4200/admin/user
      { path: 'role', loadChildren: './role/role.module#RoleModule' },
      // localhost:4200/admin/func
      { path: 'func', loadChildren: './function/function.module#FunctionModule' },
      // localhost:4200/admin/product-category
      { path: 'product-category', loadChildren: './product-category/product-category.module#ProductCategoryModule' },
      // localhost:4200/admin/product-category
      { path: 'product', loadChildren: './product/product.module#ProductModule' },
      // localhost:4200/admin/order
      { path: 'order', loadChildren: './order/order.module#OrderModule' },
      { path: 'training', component: TrainingComponent },
      { path: 'push-data', component: PushDataComponent },
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(defineRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
